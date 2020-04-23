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
					header: ["Category", {content: "selectFilter", value: ""}],
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
		this.table.sync(deals);
	}

	urlChange() {
		this.table.eachColumn((id) => {
			let filter = this.table.getFilter(id);
			if (filter) {
				if (filter.setValue) {
					filter.setValue("");
				}
				else {
					filter.value = "";
				}
			}
		});
		webix.promise.all([
			clients.waitData,
			deals.waitData,
			dealsProgress.waitData,
			statuses.waitData,
			categories.waitData
		]).then(() => {
			const id = this.getParam("id", true);
			if (id && deals.exists(id)) {
				deals.data.filter(item => item.agentId.toString() === id.toString());
			}
		});
	}
}
