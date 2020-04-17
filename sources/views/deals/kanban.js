import {JetView} from "webix-jet";
import {kanbanData} from "../../models/kanbanData";

export default class KanBanView extends JetView {
	config() {
		const impth = "https://docs.webix.com/samples/63_kanban/common/imgs/";

		const config = {
			view: "kanban",
			cols: [
				{
					header: "Request",
					body: {
						view: "kanbanlist",
						status: "new"
					}
				},
				{
					header: "Contacting",
					body: {
						view: "kanbanlist",
						status: "work"
					}
				},
				{
					header: "Define Details",
					body: {
						view: "kanbanlist",
						status: "work"
					}
				},
				{
					header: "Tour Scheduled",
					body: {
						view: "kanbanlist",
						status: "work"
					}
				},
				{
					header: "Paused",
					body: {
						view: "kanbanlist",
						status: "work"
					}
				},
				{
					header: "Listing Agreement",
					body: {
						view: "kanbanlist",
						status: "work"
					}
				},
				{
					header: "Purchase offer",
					body: {
						view: "kanbanlist",
						status: "work"
					}
				},
				{
					header: "Escrow",
					body: {
						view: "kanbanlist",
						status: "work"
					}
				},
				{
					header: "Inspections",
					body: {
						view: "kanbanlist",
						status: "test"
					}
				},
				{
					header: "Lending",
					body: {
						view: "kanbanlist",
						status: "work"
					}
				},
				{
					header: "Closing",
					body: {
						view: "kanbanlist",
						status: "done"
					}
				}
			],
			editor: true,
			users: [
				{id: 1, value: "Rick Lopes", image: `${impth}1.jpg`},
				{id: 2, value: "Martin Farrell", image: `${impth}2.jpg`},
				{id: 3, value: "Douglass Moore", image: `${impth}3.jpg`},
				{id: 4, value: "Eric Doe", image: `${impth}4.jpg`},
				{id: 5, value: "Sophi Elliman", image: `${impth}5.jpg`},
				{id: 6, value: "Anna O'Neal"},
				{id: 7, value: "Marcus Storm", image: `${impth}7.jpg`},
				{id: 8, value: "Nick Branson", image: `${impth}8.jpg`},
				{id: 9, value: "CC", image: `${impth}9.jpg`},
				{id: 10, value: "CC", image: `${impth}10.jpg`}
			],
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
	}
}
