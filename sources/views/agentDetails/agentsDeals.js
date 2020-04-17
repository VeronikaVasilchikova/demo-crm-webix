import {JetView} from "webix-jet";
import {clients} from "../../models/clients";
import {deals} from "../../models/deals";
import {dealsProgress} from "../../models/dealsProgress";
import {statuses} from "../../models/statuses";
import {categories} from "../../models/categories";

export default class AgentsDealsView extends JetView {
	config() {
		return {
			view: "datatable",
			localId: "grid",
			css: "webix_data_border webix_header_border",
			scroll: "y",
			autoconfig: true,
			rowCss: "#css#",
			select: true,
			columns: [
				{
					id: "clientNameId",
					header: "Client Name",
					fillspace: true,
					template: obj => clients.getItem(obj.clientNameId).value
				},
				{
					id: "dealCreated",
					header: "Deal created",
					sort: "date",
					format: webix.i18n.longDateFormatStr,
					adjust: true
				},
				{
					id: "categoryId",
					header: ["Category", {content: "selectFilter"}],
					options: categories,
					adjust: true
				},
				{
					id: "lastActivity",
					header: "Last activity",
					format: webix.i18n.longDateFormatStr,
					adjust: true
				},
				{
					id: "nextActivity",
					header: "Next activity",
					format: webix.i18n.longDateFormatStr,
					adjust: true
				},
				{
					id: "dealProgressId",
					header: "Deal progress",
					options: dealsProgress,
					adjust: true,
					template: (obj) => {
						if (obj.dealProgressId) {
							return dealsProgress.getItem(obj.dealProgressId).transactionStage;
						}
						return "";
					}
				},
				{
					id: "statusId",
					header: ["Status", {content: "selectFilter"}],
					options: statuses,
					adjust: true
				}
			]
		};
	}

	init() {
		this.table = this.$$("grid");
	}

	urlChange() {
		const id = this.getParam("id", true);
		if (id && deals.exists(id)) {
			this.table.sync(deals, () => {
				this.table.filter(item => item.agentId.toString() === id.toString());
			});
		}
	}
}