import {JetView} from "webix-jet";
import {kanbanData} from "../../models/deals";
import {usersAgents} from "../../models/agents";

export default class KanBanView extends JetView {
	config() {
		const config = {
			view: "kanban",
			localId: "kanban",
			cols: [
				{
					header: "Request",
					body: {
						view: "kanbanlist",
						status: "request"
					}
				},
				{
					header: "Contacting",
					body: {
						view: "kanbanlist",
						status: "contacting"
					}
				},
				{
					header: "Define Details",
					body: {
						view: "kanbanlist",
						status: "define details"
					}
				},
				{
					header: "Tour Scheduled",
					body: {
						view: "kanbanlist",
						status: "tour scheduled"
					}
				},
				{
					header: "Paused",
					body: {
						view: "kanbanlist",
						status: "paused"
					}
				},
				{
					header: "Listing Agreement",
					body: {
						view: "kanbanlist",
						status: "listing agreement"
					}
				},
				{
					header: "Purchase offer",
					body: {
						view: "kanbanlist",
						status: "purchase offer"
					}
				},
				{
					header: "Escrow",
					body: {
						view: "kanbanlist",
						status: "escrow"
					},
					collapsed: true
				},
				{
					header: "Inspections",
					body: {
						view: "kanbanlist",
						status: "inspections"
					},
					collapsed: true
				},
				{
					header: "Lending",
					body: {
						view: "kanbanlist",
						status: "lending"
					},
					collapsed: true
				},
				{
					header: "Closing",
					body: {
						view: "kanbanlist",
						status: "closing"
					},
					collapsed: true
				}
			],
			editor: true,
			cardActions: true,
			users: usersAgents,
			tags: [
				{id: 1, value: "Sell"},
				{id: 2, value: "Rent"},
				{id: 3, value: "Buy"}
			],
			colors: [
				{id: 1, value: "Normal", color: "green"},
				{id: 2, value: "Low", color: "orange"},
				{id: 3, value: "Urgent", color: "red"}
			]
		};

		return webix.require({
			"https://cdn.webix.com/pro/edge/kanban/kanban.js": true,
			"https://cdn.webix.com/pro/edge/kanban/kanban.css": true
		}).then(() => config);
	}

	init() {
		this.getRoot().parse(kanbanData);
		this.$$("kanban").attachEvent("onListItemDblClick", (itemId) => {
			const id = kanbanData[Number(itemId) - 1].dealId;
			const categoryId = kanbanData[Number(itemId) - 1].categoryId;
			let category = "";
			if (categoryId === "1") {
				category = "Sell";
			}
			else if (categoryId === "2") {
				category = "Rent";
			}
			else if (categoryId === "3") {
				category = "Buy";
			}
			this.show(`/top/detailsOfDeals?id=${id}?category=${category}?kanban=true`);
		});
	}
}
