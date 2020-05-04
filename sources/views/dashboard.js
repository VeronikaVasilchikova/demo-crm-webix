import {JetView} from "webix-jet";
import DashboardAnaliticsView from "./dashboardAnalitics";
import DashboardSourcesView from "./dashboardSources";
import DashboardDealsProgressView from "./dashboardDealsProgress";
import DashboardAgentsView from "./dashboardAgents";

export default class DashboardView extends JetView {
	config() {
		const dealsAnalitics = {
			type: "clean",
			cols: [
				{
					gravity: 1,
					template: "Deals Analytics",
					type: "header"
				},
				{
					gravity: 8,
					view: "toolbar",
					cols: [
						{
							view: "richselect",
							value: "2",
							localId: "combo",
							options: [
								{id: 1, value: "last week"},
								{id: 2, value: "last month"},
								{id: 3, value: "last 90 days"}
							],
							inputWidth: 200
						}
					]
				}
			]
		};

		return {
			view: "scrollview",
			scroll: "y",
			body: {
				type: "wide",
				rows: [
					{
						rows: [
							dealsAnalitics,
							DashboardAnaliticsView
						]
					},
					{
						height: 480,
						rows: [
							DashboardDealsProgressView
						]
					},
					{
						type: "wide",
						height: 270,
						cols: [
							{
								gravity: 3,
								rows: [
									DashboardAgentsView
								]
							},
							{
								gravity: 1,
								rows: [
									DashboardSourcesView
								]
							}
						]
					}
				]
			}
		};
	}

	init() {
		const val = this.$$("combo").getValue();
		this.setParam("id", val, true);

		this.$$("combo").attachEvent("onChange", (newv) => {
			this.setParam("id", newv, true);
		});
	}
}
