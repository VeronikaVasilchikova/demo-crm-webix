import {JetView} from "webix-jet";
import {dealsProgress} from "../../models/dealsProgress";

export default class ProgressView extends JetView {
	config() {
		return {
			gravity: 1.5,
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
					value: "#value#",
					color: "#color#",
					label: "#transactionStage#",
					tooltip: {
						template: "#value#"
					},
					legend: {
						template: "#transactionStage#",
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
		this.$$("chart").parse(dealsProgress);
	}
}
