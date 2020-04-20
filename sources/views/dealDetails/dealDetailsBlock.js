import {JetView} from "webix-jet";
import ActivityView from "../activity";
import EmailView from "../email";
import DocumentsView from "../documents";

export default class DealDetailsBlockView extends JetView {
	config() {
		const tabbar = {
			view: "tabbar",
			value: "activity",
			localId: "tabbar",
			multiview: true,
			options: [
				{value: "Activity", id: "activity"},
				{value: "Email", id: "email"},
				{value: "Documents", id: "documents"}
			],
			height: 50
		};

		return {
			rows: [
				tabbar,
				{
					cells: [
						{localId: "activity", rows: [ActivityView]},
						{localId: "email", rows: [EmailView]},
						{localId: "documents", rows: [DocumentsView]}
					]
				}
			]
		};
	}

	init() {
		this.$$("tabbar").attachEvent("onChange", id => this.$$(id).show());
	}
}
