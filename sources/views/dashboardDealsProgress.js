import {JetView} from "webix-jet";
import {analiticsProgress} from "../models/analiticsProgress";

export default class DashboardDealsProgressView extends JetView {
	config() {
		return {
			rows: [
				{
					template: "Deals progress by count",
					type: "header",
					css: "chart_header"
				},
				{
					view: "chart",
					localId: "chart",
					type: "barH",
					radius: 0,
					barWidth: 30,
					value: "#amount#",
					color: "#color#",
					label: "#value#",
					tooltip: {
						template: "#amount#"
					},
					legend: {
						template: "#value#",
						valign: "top",
						align: "center",
						layout: "x"
					},
					padding: {
						top: 20,
						bottom: 10,
						right: 90,
						left: 20
					}
				}
			]
		};
	}

	init() {
		this.chart = this.$$("chart");
	}

	urlChange() {
		const id = this.getParam("id", true);
		this.chart.clearAll();
		this.chart.refresh();
		if (id && analiticsProgress.exists(id)) {
			const item = analiticsProgress.getItem(id);
			this.chart.parse(item.title);
		}
	}
}
