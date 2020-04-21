import {JetView} from "webix-jet";
import PopupFormView from "../popupFormForDeals";
import {clients} from "../../models/clients";
import {agents} from "../../models/agents";
import {deals} from "../../models/deals";
import {dealsProgress} from "../../models/dealsProgress";
import {statuses} from "../../models/statuses";
import {categories} from "../../models/categories";

export default class ListOfDealsView extends JetView {
	config() {
		return {
			view: "datatable",
			localId: "grid",
			css: "webix_data_border webix_header_border",
			scroll: "y",
			editable: true,
			editaction: "custom",
			autoconfig: true,
			tooltip: {
				template: `
					<p>Choose a cell and press the Enter to edit</p>
					<p>Make a double click to open the cell editor to see additional information about this deal</p>
				`
			},
			rowCss: "#css#",
			select: "cell",
			columns: [
				{
					id: "newClientName",
					header: "Client Name",
					fillspace: true,
					editor: "text"
				},
				{
					id: "dealCreated",
					header: "Deal created",
					sort: "date",
					format: webix.i18n.longDateFormatStr,
					adjust: true,
					editor: "date"
				},
				{
					id: "agentId",
					header: ["Agent", {content: "selectFilter"}],
					fillspace: true,
					options: agents,
					template: obj => agents.getItem(obj.agentId).name,
					editor: "select"
				},
				{
					id: "categoryId",
					header: ["Category", {content: "selectFilter"}],
					options: categories,
					adjust: true,
					editor: "select"
				},
				{
					id: "lastActivity",
					header: "Last activity",
					sort: "date",
					format: webix.i18n.longDateFormatStr,
					adjust: true,
					editor: "date"
				},
				{
					id: "nextActivity",
					header: "Next activity",
					sort: "date",
					format: webix.i18n.longDateFormatStr,
					adjust: true,
					editor: "date"
				},
				{
					id: "newDealProgress",
					header: "Deal progress",
					adjust: true,
					editor: "text"
				},
				{
					id: "statusId",
					header: ["Status", {content: "selectFilter"}],
					options: statuses,
					adjust: true,
					editor: "select"
				},
				{
					header: ["", ""],
					template: "<span class='myicon'></span>",
					adjust: true
				}
			],
			onClick: {
				myicon: (e, id) => {
					this.editItem(id.row);
				}
			}
		};
	}

	init() {
		this._jetPopupForm = this.ui(PopupFormView);
		this.$$("grid").attachEvent("onItemDblClick", (id) => {
			this.show(`/top/detailsOfDeals?id=${id}`);
		});

		webix.UIManager.addHotKey("enter", (view) => {
			const pos = view.getSelectedId();
			view.edit(pos);
		}, this.$$("tableDetails"));

		webix.promise.all([
			clients.waitData,
			deals.waitData,
			dealsProgress.waitData,
			statuses.waitData,
			categories.waitData,
			agents.waitData
		]).then(() => {
			this.$$("grid").sync(deals, () => {
				deals.config.data.forEach((item) => {
					item.newClientName = clients.getItem(item.clientNameId).value;
					if (item.dealProgressId) {
						item.newDealProgress = dealsProgress.getItem(item.dealProgressId).transactionStage;
					}
					else {
						item.newDealProgress = "";
					}
				});
			});
			deals.data.filter();
		});
	}

	editItem(id) {
		if (id) {
			this._jetPopupForm.showPopupForm(id);
		}
	}
}
