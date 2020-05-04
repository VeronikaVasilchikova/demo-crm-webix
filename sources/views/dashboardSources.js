import {JetView} from "webix-jet";
import {sources} from "../models/sources";

export default class DashboardSourcesView extends JetView {
	config() {
		return {
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
					innerRadius: 20,
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
		this.sources = this.$$("sources");
	}

	urlChange() {
		const id = this.getParam("id", true);
		this.sources.clearAll();
		this.sources.refresh();
		if (id && sources.exists(id)) {
			const item = sources.getItem(id);
			this.sources.parse(item.title);
		}
	}
}
