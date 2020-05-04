import {JetView} from "webix-jet";
import {analitics} from "../models/analitics";

export default class DashboardAnaliticsView extends JetView {
	config() {
		return {
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
		};
	}

	init() {
		this.dataAnalitics = this.$$("dataAnalitics");
	}

	urlChange() {
		const id = this.getParam("id", true);
		this.dataAnalitics.clearAll();
		this.dataAnalitics.refresh();
		if (id && analitics.exists(id)) {
			const item = analitics.getItem(id);
			this.dataAnalitics.parse(item.title);
		}
	}
}
