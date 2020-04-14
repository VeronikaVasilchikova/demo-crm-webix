import {JetView} from "webix-jet";
import {sources} from "../../models/sources";

export default class SoucesrView extends JetView {
	config() {
		return {
			gravity: 1,
			rows: [
				{
					template: "Top source",
					type: "header",
					css: "chart_header"
				},
				{
					localId: "sources",
					view: "chart",
					type: "donut",
					value: "#value#",
					color: "#color#",
					innerRadius: 80,
					shadow: 0,
					gradient: true,
					lineColor: obj => obj.color,
					tooltip: {
						template: "#value#"
					},
					legend: {
						width: 100,
						align: "right",
						valign: "middle",
						template: obj => obj.source
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
		this.$$("sources").parse(sources);
	}
}
