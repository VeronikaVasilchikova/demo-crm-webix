import {JetView} from "webix-jet";
import {analitics} from "../../models/analitics";

export default class AnaliticsView extends JetView {
	config() {
		return {
			gravity: 1,
			type: "clean",
			rows: [
				{
					type: "clean",
					cols: [
						{
							gravity: 1,
							template: "Deals Analytics",
							type: "header"
						},
						{
							gravity: 10,
							view: "toolbar",
							cols: [
								{
									view: "combo",
									value: "last month",
									options: ["last month", "last week", "last 90 days"],
									inputWidth: 200,
									on: {
										onChange(newValue) {
											if (newValue === "last week") {
												this.$scope.setParam("id", "1", true);
											}
											else if (newValue === "last month") {
												this.$scope.setParam("id", "2", true);
											}
											else if (newValue === "last 90 days") {
												this.$scope.setParam("id", "3", true);
											}
										}
									}
								}
							]
						}
					]
				},
				{
					view: "dataview",
					localId: "dataAnalitics",
					xCount: 3,
					yCount: 1,
					scroll: false,
					height: 100,
					type: {
						width: "auto",
						height: 100,
						css: "dataview_deals",
						template: `
								<div class="deals">
									<div>
										<div class="deals_title">#value#</div>
										<div class="deals_amount">$ #amount#</div>
									</div>
									<div style="color: #color#" class="deals_number">#number#</div>
								</div>
							`
					}
				}
			]
		};
	}

	init() {
		this.setParam("id", "2", true);
		const id = this.getParam("id", true);
		if (id && analitics.exists(id)) {
			const item = analitics.getItem(id);
			this.$$("dataAnalitics").parse(item.title);
		}
	}

	urlChange() {
		const id = this.getParam("id", true);
		if (id && analitics.exists(id)) {
			const item = analitics.getItem(id);
			this.$$("dataAnalitics").parse(item.title);
		}
	}
}
