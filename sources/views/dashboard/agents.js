import {JetView} from "webix-jet";
import {agentsTopFive} from "../../models/agents";

export default class AgentsView extends JetView {
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
			columns: [
				{
					id: "name",
					header: "",
					fillspace: 2
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
			],
			data: agentsTopFive
		}

		return {
			gravity: 3,
			rows: [
				header,
				datatable
			]
		};
	}
}
