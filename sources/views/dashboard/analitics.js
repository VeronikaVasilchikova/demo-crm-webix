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
							template: "Deals Analytics",
							type: "header"
						},
						{
							view: "toolbar",
							cols: [
								{
									view: "daterangepicker",
									name: "default",
									inputWidth: 250,
									value: {
										start: new Date(),
										end: webix.Date.add(new Date(), 1, "month")
									},
									format: webix.i18n.longDateFormatStr
								},
								{
									view: "combo",
									value: "last month",
									options: ["last month", "last week", "last 90 days"],
									inputWidth: 200
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
									<div class="deals_title">#title#</div>
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
		this.$$("dataAnalitics").parse(analitics);
	}
}
