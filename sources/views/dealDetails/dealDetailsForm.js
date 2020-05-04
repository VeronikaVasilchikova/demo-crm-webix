import {JetView} from "webix-jet";
import {clients} from "../../models/clients";
import {agents} from "../../models/agents";
import {deals} from "../../models/deals";
import {tags} from "../../models/tags";
import {dealsProgress} from "../../models/dealsProgress";
import {statuses} from "../../models/statuses";
import {categories} from "../../models/categories";

export default class DealDetailsFormView extends JetView {
	config() {
		const client = {
			margin: 25,
			rows: [
				{
					label: "Client Name",
					labelWidth: 90,
					view: "text",
					name: "clientName",
					disabled: true
				},
				{
					label: "Email",
					labelWidth: 90,
					view: "text",
					name: "email",
					disabled: true
				},
				{
					label: "Phone",
					labelWidth: 90,
					view: "text",
					name: "phone",
					disabled: true
				},
				{
					label: "Source",
					labelWidth: 90,
					view: "text",
					name: "source",
					disabled: true
				},
				{
					view: "textarea",
					label: "Notes",
					name: "notes",
					placeholder: "Type text",
					disabled: true
				},
				{
					view: "multicombo",
					label: "Property preference",
					labelPosition: "top",
					name: "tags",
					localId: "combo",
					placeholder: "Click to add tags",
					options: tags,
					hidden: true,
					disabled: true
				},
				{
					cols: [
						{},
						{},
						{
							view: "button",
							value: "Save",
							localId: "btnSaveClient",
							type: "form",
							click: () => this.edit(this.clientForm, clients),
							hidden: true
						},
						{
							view: "button",
							value: "Cancel",
							localId: "btnCancelClient",
							type: "form",
							click: () => this.resetForm(this.clientForm),
							hidden: true
						},
						{
							view: "icon",
							icon: "mdi mdi-pencil",
							localId: "btnClientEdit",
							click: () => this.showButtons("client")
						}
					]
				}
			]
		};

		const deal =	{
			margin: 25,
			rows: [
				{
					label: "Deal created",
					labelWidth: 110,
					view: "datepicker",
					name: "dealCreated",
					type: "date",
					format: webix.i18n.longDateFormatStr,
					disabled: true
				},
				{
					label: "Status",
					labelWidth: 110,
					view: "richselect",
					name: "statusId",
					options: {
						body: {
							data: statuses,
							template: "#value#"
						}
					},
					disabled: true
				},
				{
					label: "Agent",
					labelWidth: 110,
					view: "richselect",
					name: "agentId",
					options: agents,
					disabled: true
				},
				{
					label: "Category",
					labelWidth: 110,
					view: "richselect",
					name: "categoryId",
					options: categories,
					disabled: true
				},
				{
					label: "Deal progress",
					labelWidth: 110,
					view: "richselect",
					name: "dealProgressId",
					options: dealsProgress,
					disabled: true
				},
				{
					label: "Last activity",
					labelWidth: 110,
					view: "datepicker",
					name: "lastActivity",
					type: "date",
					format: webix.i18n.longDateFormatStr,
					disabled: true
				},
				{
					label: "Next activity",
					labelWidth: 110,
					view: "datepicker",
					name: "nextActivity",
					type: "date",
					format: webix.i18n.longDateFormatStr,
					disabled: true
				},
				{
					cols: [
						{},
						{},
						{
							view: "button",
							value: "Save",
							localId: "btnSaveDeal",
							type: "form",
							click: () => this.edit(this.dealForm, deals),
							hidden: true
						},
						{
							view: "button",
							value: "Cancel",
							localId: "btnCancelDeal",
							type: "form",
							click: () => this.resetForm(this.dealForm),
							hidden: true
						},
						{
							view: "icon",
							icon: "mdi mdi-pencil",
							localId: "btnDealEdit",
							click: () => this.showButtons("deal")
						}
					]
				}
			]
		};

		return {
			rows: [
				{
					template: "Deal details",
					type: "header",
					css: "deal_header"
				},
				{
					cols: [
						{
							view: "form",
							localId: "clientForm",
							rows: [
								client
							]
						},
						{
							view: "form",
							localId: "dealForm",
							elements: [
								deal
							]
						}
					]
				}
			]
		};
	}

	init() {
		this.clientForm = this.$$("clientForm");
		this.dealForm = this.$$("dealForm");
		const id = this.getParam("id", true);
		if (id && deals.exists(id)) {
			const item = deals.getItem(id);
			this.dealForm.setValues(item);
			const clientItem = clients.getItem(item.clientNameId);
			this.clientForm.setValues(clientItem);
		}
		if (this.getParam("category") !== "Sell") {
			this.$$("combo").show();
		}
	}

	edit(form, store) {
		const values = form.getValues();
		store.waitSave(() => {
			if (values && values.id) {
				store.updateItem(values.id, values);
			}
		});
		this.hideButtons();
	}

	resetForm(form) {
		const values = form.getCleanValues();
		if (form.isDirty()) {
			webix.confirm({
				title: "Cancel without saving changes",
				ok: "Yes",
				cancel: "No",
				text: "Are you sure you want to reset without saving changes?"
			}).then(() => webix.confirm({
				title: "Warning!",
				type: "confirm-warning",
				text: "You are about to agree. Are you sure?"
			})).then(() => {
				form.setValues(values);
				this.hideButtons();
			});
		}
		else {
			this.hideButtons();
		}
	}

	hideButtons() {
		if (!this.$$("btnSaveDeal").config.hidden && !this.$$("btnSaveDeal").config.hidden) {
			const elements = Object.values(this.dealForm.elements);
			elements.forEach((item) => {
				item.disable();
			});
			this.$$("btnSaveDeal").hide();
			this.$$("btnCancelDeal").hide();
			this.$$("btnDealEdit").show();
		}
		if (!this.$$("btnSaveClient").config.hidden && !this.$$("btnSaveClient").config.hidden) {
			const elements = Object.values(this.clientForm.elements);
			elements.forEach((item) => {
				item.disable();
			});
			this.$$("btnSaveClient").hide();
			this.$$("btnCancelClient").hide();
			this.$$("btnClientEdit").show();
		}
	}

	showButtons(condition) {
		if (condition === "deal") {
			const elements = Object.values(this.dealForm.elements);
			elements.forEach((item) => {
				item.enable();
			});
			this.$$("btnSaveDeal").show();
			this.$$("btnCancelDeal").show();
			this.$$("btnDealEdit").hide();
		}
		if (condition === "client") {
			const elements = Object.values(this.clientForm.elements);
			elements.forEach((item) => {
				item.enable();
			});
			this.$$("btnSaveClient").show();
			this.$$("btnCancelClient").show();
			this.$$("btnClientEdit").hide();
		}
	}
}
