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
					name: "clientName"
				},
				{
					label: "Email",
					labelWidth: 90,
					view: "text",
					name: "email"
				},
				{
					label: "Phone",
					labelWidth: 90,
					view: "text",
					name: "phone"
				},
				{
					label: "Source",
					labelWidth: 90,
					view: "text",
					name: "source"
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
					format: webix.i18n.longDateFormatStr
				},
				{
					label: "Status",
					labelWidth: 110,
					view: "combo",
					name: "statusId",
					options: {
						body: {
							data: statuses,
							template: "#value#"
						}
					}
				},
				{
					label: "Agent",
					labelWidth: 110,
					view: "combo",
					name: "agentId",
					options: agents
				},
				{
					label: "Category",
					labelWidth: 110,
					view: "combo",
					name: "categoryId",
					options: categories
				},
				{
					label: "Deal progress",
					labelWidth: 110,
					view: "combo",
					name: "dealProgressId",
					options: dealsProgress
				},
				{
					label: "Last activity",
					labelWidth: 110,
					view: "datepicker",
					name: "lastActivity",
					type: "date",
					format: webix.i18n.longDateFormatStr
				},
				{
					label: "Next activity",
					labelWidth: 110,
					view: "datepicker",
					name: "nextActivity",
					type: "date",
					format: webix.i18n.longDateFormatStr
				}
			]
		};

		return {
			rows: [
				{
					template: "Deal details",
					type: "header"
				},
				{
					cols: [
						{
							view: "form",
							localId: "clientForm",
							margin: 25,
							rows: [
								client,
								{
									view: "multicombo",
									label: "Property preference",
									labelPosition: "top",
									name: "tags",
									localId: "combo",
									placeholder: "Click to add tags",
									options: tags
								},
								{
									view: "textarea",
									label: "Notes",
									placeholder: "Type text"
								},
								{}
							]
						},
						{
							view: "form",
							localId: "dealForm",
							elements: [
								deal,
								{}
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
	}
}
