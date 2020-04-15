import {JetView} from "webix-jet";
import ListOfDealsView from "./listOfDeals";
import KanbanView from "./kanban";

export default class TopView extends JetView {
	config() {
		const tabbar = {
			view: "tabbar",
			value: "List of deals",
			localId: "tabbar",
			options: [
				{value: "List of deals", id: "listOfDeals"},
				{value: "Kanban", id: "kanban"}
			],
			height: 50
		};

		return {
			type: "clean",
			rows: [
				tabbar,
				{
					cells: [
						{localId: "listOfDeals", rows: [ListOfDealsView]},
						{localId: "kanban", rows: [KanbanView]}
					]
				}
			]
		};
	}

	init() {
		this.$$("tabbar").attachEvent("onChange", id => this.$$(id).show());
	}
}
