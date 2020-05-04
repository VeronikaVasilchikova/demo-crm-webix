import {JetView} from "webix-jet";
import {agents} from "../../models/agents";

export default class AgentsPieChartView extends JetView {
	config() {
		return {
			rows: [
				{
					template: "Deals by status",
					type: "header",
					css: "chart_header"
				},
				{
					localId: "dealsByStatus",
					view: "chart",
					type: "donut",
					value: "#value#",
					color: "#color#",
					innerRadius: 60,
					shadow: 0,
					gradient: true,
					lineColor: obj => obj.color,
					tooltip: {
						template: "#value#"
					},
					legend: {
						width: 60,
						align: "right",
						valign: "middle",
						template: obj => obj.name
					},
					padding: {
						top: 10,
						bottom: 20
					}
				}
			]
		};
	}

	init() {
		this.pieChart = this.$$("dealsByStatus");
	}

	urlChange() {
		const id = this.getParam("id", true);
		if (id && agents.exists(id)) {
			const item = agents.getItem(id);
			this.pieChart.parse(item.deals);
		}
	}
}
