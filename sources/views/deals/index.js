import {JetView} from "webix-jet";
import ListOfDealsView from "./listOfDeals";
import KanbanView from "./kanban";

export default class TopView extends JetView {
	config() {
		const tabbar = {
			view: "tabbar",
			// value: "listOfDeals",
			localId: "tabbar",
			multiview: true,
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
					localId: "deals",
					cells: [
						{localId: "listOfDeals", rows: [ListOfDealsView]},
						{localId: "kanban", rows: [KanbanView]}
					]
				}
			]
		};
	}

	init() {
		this.$$("tabbar").attachEvent("onChange", (id) => {
			this.setParam("id", id, true);
			this.$$(id).show();
		});
	}

	urlChange() {
		const id = this.getParam("id", true);
		if (id) {
			this.$$(id).show();
			this.$$("tabbar").config.value = id;
			this.$$("tabbar").refresh();
		}
		else {
			this.$$("listOfDeals").show();
		}
	}
}
