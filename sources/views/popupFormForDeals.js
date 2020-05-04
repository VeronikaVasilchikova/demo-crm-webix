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
			view: "popup",
			localId: "window",
			position: "center",
			width: 500,
			modal: true,
			body: {
				rows: [
					{
						template: "Edit this deal",
						localId: "editHeader",
						type: "header",
						css: "chart_header",
						hidden: true
					},
					{
						template: "Add new deal",
						localId: "addHeader",
						type: "header",
						css: "chart_header",
						hidden: true
					},
					{
						view: "form",
						localId: "form",
						elements: [
							{
								label: "Client Name",
								labelWidth: 150,
								view: "richselect",
								name: "clientNameId",
								options: clients,
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
								view: "richselect",
								name: "agentId",
								options: agents,
								required: true,
								invalidMessage: "This field must be filled"
							},
							{
								label: "Category",
								localId: "category",
								labelWidth: 150,
								view: "richselect",
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
								view: "richselect",
								name: "dealProgressId",
								options: dealsProgress
							},
							{
								label: "Status",
								labelWidth: 150,
								view: "richselect",
								name: "statusId",
								localId: "status",
								options: statuses,
								required: true,
								invalidMessage: "This field must be filled",
								hidden: true
							},
							{
								cols: [
									{
										view: "button",
										value: "Save",
										localId: "btn",
										type: "form",
										click: () => this.addOrEdit()
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
							clientNameId: webix.rules.isNotEmpty,
							dealCreated: webix.rules.isNotEmpty,
							agentId: webix.rules.isNotEmpty,
							categoryId: webix.rules.isNotEmpty,
							lastActivity: webix.rules.isNotEmpty,
							statusId: webix.rules.isNotEmpty
						}
					}
				]
			}
		};
	}

	init() {
		this.form = this.$$("form");
		document.addEventListener("click", (e) => {
			if (e.target.classList.contains("webix_modal")) {
				this.closeForm();
			}
		});
	}

	showPopupForm(id) {
		if (id && deals.exists(id)) {
			const item = webix.copy(deals.getItem(id));
			this.form.setValues(item);
		}
		this.getRoot().show();
		const someBtnAction = id ? "Save changes" : "Add new deal";
		if (id) {
			this.$$("category").disable();
			this.$$("status").show();
			this.$$("editHeader").show();
			this.$$("addHeader").hide();
		}
		else {
			this.$$("category").enable();
			this.$$("addHeader").show();
			this.$$("editHeader").hide();
		}
		this.$$("btn").setValue(someBtnAction);
	}

	clearForm() {
		this.form.clear();
		this.form.clearValidation();
		this.getRoot().hide();
	}

	addOrEdit() {
		if (this.form.validate()) {
			const values = this.form.getValues();
			deals.waitSave(() => {
				if (values && values.id) {
					deals.updateItem(values.id, values);
				}
				else {
					values.statusId = "1";
					deals.add(values, 0);
				}
			});
			this.clearForm();
		}
	}

	closeForm() {
		if (this.form.isDirty()) {
			webix.confirm({
				title: "Close without saving changes",
				ok: "Yes",
				cancel: "No",
				text: "Are you sure you want to close without saving changes?"
			}).then(() => webix.confirm({
				title: "Warning!",
				type: "confirm-warning",
				text: "You are about to agree. Are you sure?"
			})).then(() => {
				this.clearForm();
			});
		}
		else {
			this.clearForm();
		}
	}
}
