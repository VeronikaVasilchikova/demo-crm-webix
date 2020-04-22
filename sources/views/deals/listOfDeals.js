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
		const datatable = {
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
					id: "clientNameId",
					header: ["Client Name", {content: "selectFilter"}],
					fillspace: true,
					options: clients,
					editor: "select"
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
					id: "dealProgressId",
					header: ["Deal progress", {content: "selectFilter"}],
					adjust: true,
					options: dealsProgress,
					template: obj => {
						if (obj.dealProgressId) {
							return dealsProgress.getItem(obj.dealProgressId).value;
						}
						return "";
					},
					editor: "select"
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

		const btnAdd = {
			view: "button",
			type: "icon",
			icon: "wxi-plus-square",
			label: "New deal",
			align: "right",
			click: () => this.addItem()
		};

		return {
			rows: [
				datatable,
				btnAdd
			]
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
				this.$$("grid").sort("#dealCreated#", "desc", "date");
			});
			deals.data.filter();
		});
	}

	editItem(id) {
		if (id) {
			this._jetPopupForm.showPopupForm(id);
		}
	}

	addItem() {
		this._jetPopupForm.showPopupForm();
	}
}
