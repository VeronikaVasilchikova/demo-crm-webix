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
					<p>Make a double click to see additional information about this deal</p>
				`
			},
			rowCss: "#css#",
			select: true,
			columns: [
				{
					id: "clientNameId",
					header: ["Client Name", {content: "selectFilter"}],
					fillspace: true,
					options: clients,
					editor: "myeditor"
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
					adjust: true
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
					template: (obj) => {
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
					adjust: true,
					tooltip: false
				},
				{
					header: ["", ""],
					template: "{common.trashIcon()}",
					adjust: true,
					tooltip: false
				}
			],
			onClick: {
				myicon: (e, id) => {
					this.editItem(id.row);
				},
				"wxi-trash": (e, id) => this.removeDeal(id)
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

		const btnToExcel = {
			view: "button",
			label: "Convert to Excel",
			align: "right",
			localId: "btnToExcel",
			click: () => this.convertToExcel()
		};

		return {
			rows: [
				datatable,
				{
					cols: [
						btnAdd,
						btnToExcel
					]
				}
			]
		};
	}

	init() {
		this._jetPopupForm = this.ui(PopupFormView);
		this.$$("grid").attachEvent("onItemDblClick", (id) => {
			let category = "";
			if (id && deals.exists(id)) {
				const item = deals.getItem(id).categoryId;
				if (item && categories.exists(item)) {
					category = categories.getItem(item).value;
				}
			}
			this.show(`/top/detailsOfDeals?id=${id}?category=${category}`);
		});

		webix.UIManager.addHotKey("enter", (view) => {
			const pos = view.getSelectedId();
			view.edit(pos);
			console.log(pos);
			if (pos.column === "categoryId") {
				webix.message({
					text: "You can't edit this cell",
					type: "error",
					expire: 10000
				});
			}
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

		webix.editors.myeditor = webix.extend({
			getValue() {
				clients.updateItem(this.value, {clientName: this.getInputNode(this.node).value});
				return this.value;
			},
			setValue(value) {
				value = clients.getItem(value).value;
				this.getInputNode(this.node).value = value;
			}
		}, webix.editors.text);
	}

	editItem(id) {
		if (id) {
			this._jetPopupForm.showPopupForm(id);
		}
	}

	addItem() {
		this._jetPopupForm.showPopupForm();
	}

	removeDeal(id) {
		webix.confirm({
			title: "Remove this deal",
			ok: "Yes",
			cancel: "No",
			text: "Are you sure you want to remove this deal?"
		}).then(() => webix.confirm({
			title: "Warning!",
			type: "confirm-warning",
			text: "You are about to agree. Are you sure?"
		})).then(() => {
			deals.remove(id);
		});
		return false;
	}

	convertToExcel() {
		webix.toExcel(this.$$("grid"), {
			filename: "Deals",
			name: "Deals",
			columns: {
				clientNameId: {header: "Client Name", width: 200},
				dealCreated: {header: "Deal Created", width: 200},
				agentId: {header: "Agent", width: 200},
				categoryId: {header: "Category", width: 100},
				lastActivity: {header: "Last Activity", width: 200},
				nextActivity: {header: "Next Activity", width: 200},
				dealProgressId: {header: "Deal Progress", width: 200},
				statusId: {header: "Status", width: 200}
			}
		});
	}
}
