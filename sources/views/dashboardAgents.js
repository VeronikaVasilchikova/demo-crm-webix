import {JetView} from "webix-jet";
import {agentsTopFive} from "../models/agentsAnalitics";

export default class DashboardAgentsView extends JetView {
	config() {
		const header = {
			type: "header",
			template: "Top 5 agents by deals count",
			css: "chart_header"
		};

		const datatable = {
			view: "datatable",
			localId: "grid",
			scroll: "y",
			autoconfig: true,
			css: "webix_data_border webix_header_border",
			columns: [
				{
					id: "name",
					header: "Agents",
					fillspace: 2
				},
				{
					id: "rating",
					header: "Rating",
					fillspace: 1,
					template: (obj) => {
						let color;
						if (Number(obj.rating) > 60) {
							color = "green";
						}
						else if (Number(obj.rating) <= 60 && Number(obj.rating) > 40) {
							color = "yellow";
						}
						else {
							color = "red";
						}
						return `
							<div class="progress_bar_element">
								<div title="${obj.rating}%" class="progress_result progress_result_${color}" style="width: ${obj.rating}%">
								</div>
							</div>
						`;
					}
				},
				{
					id: "wonDeal",
					header: "Won deal",
					format: webix.i18n.longDateFormatStr,
					fillspace: 1
				},
				{
					id: "topDealValue",
					header: "Top deal value",
					fillspace: 1,
					template: "$ #topDealValue#"
				},
				{
					id: "location",
					header: "Location",
					fillspace: 1
				}
			]
		};

		return {
			rows: [
				header,
				datatable
			]
		};
	}

	init() {
		this.grid = this.$$("grid");
	}

	urlChange() {
		const id = this.getParam("id", true);
		this.grid.clearAll();
		this.grid.refresh();
		if (id && agentsTopFive.exists(id)) {
			const item = agentsTopFive.getItem(id);
			this.grid.parse(item.title);
		}
	}
}
