import {JetView} from "webix-jet";
import {clients} from "../models/clients";
import {agents} from "../models/agents";
import {deals} from "../models/deals";
import {dealsProgress} from "../models/dealsProgress";
import {statuses} from "../models/statuses";
import {categories} from "../models/categories";

export default class PopupFormView extends JetView {
	config() {
		return {
			view: "window",
			localId: "window",
			position: "center",
			width: 500,
			move: true,
			head: "Edit this deal",
			body: {
				view: "form",
				localId: "form",
				elements: [
					{
						label: "Client Name",
						labelWidth: 150,
						view: "text",
						name: "newClientNameId",
						required: true,
						invalidMessage: "This field must be filled"
					},
					{
						label: "Deal created",
						labelWidth: 150,
						view: "datepicker",
						name: "dealCreated",
						type: "date",
						format: webix.i18n.longDateFormatStr,
						required: true,
						invalidMessage: "This field must be filled"
					},
					{
						label: "Agent",
						labelWidth: 150,
						view: "combo",
						name: "agentId",
						options: agents,
						required: true,
						invalidMessage: "This field must be filled"
					},
					{
						label: "Category",
						labelWidth: 150,
						view: "combo",
						name: "categoryId",
						options: categories,
						required: true,
						invalidMessage: "Category must be selected"
					},
					{
						label: "Last activity",
						labelWidth: 150,
						view: "datepicker",
						name: "lastActivity",
						type: "date",
						format: webix.i18n.longDateFormatStr,
						required: true,
						invalidMessage: "This field must be filled"
					},
					{
						label: "Next activity",
						labelWidth: 150,
						view: "datepicker",
						name: "nextActivity",
						type: "date",
						format: webix.i18n.longDateFormatStr
					},
					{
						label: "Deal progress",
						labelWidth: 150,
						view: "combo",
						name: "dealProgressId",
						options: {
							body: {
								data: dealsProgress,
								template: "#transactionStage#"
							}
						}
					},
					{
						label: "Status",
						labelWidth: 150,
						view: "combo",
						name: "statusId",
						options: {
							body: {
								data: statuses,
								template: "#value#"
							}
						},
						required: true,
						invalidMessage: "This field must be filled"
					},
					{
						cols: [
							{
								view: "button",
								value: "Edit",
								localId: "btn",
								type: "form",
								click: () => this.edit()
							},
							{
								view: "button",
								value: "Cancel",
								type: "form",
								click: () => this.closeForm()
							}
						]
					},
					{}
				],
				rules: {
					newClientNameId: webix.rules.isNotEmpty,
					dealCreated: webix.rules.isNotEmpty,
					agentId: webix.rules.isNotEmpty,
					categoryId: webix.rules.isNotEmpty,
					lastActivity: webix.rules.isNotEmpty,
					statusId: webix.rules.isNotEmpty
				}
			}
		};
	}

	init() {
		this.form = this.$$("form");
	}

	showPopupForm(id) {
		if (id && deals.exists(id)) {
			const item = webix.copy(deals.getItem(id));
			if (item.clientNameId) {
				item.newClientNameId = clients.getItem(item.clientNameId).value;
			}
			this.form.setValues(item);
		}
		this.getRoot().show();
	}

	closeForm() {
		this.form.clear();
		this.form.clearValidation();
		this.getRoot().hide();
	}

	edit() {
		if (this.form.validate()) {
			const values = this.form.getValues();
			deals.waitSave(() => {
				if (values && values.id) {
					deals.updateItem(values.id, values);
					clients.waitSave(() => {
						clients.getItem(values.clientNameId).value = values.newClientNameId;
					});
				}
			});
			this.closeForm();
		}
	}
}
