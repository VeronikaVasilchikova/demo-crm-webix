import {JetView} from "webix-jet";

export default class TopView extends JetView {
	config() {
		return {
			type: "space",
			rows: [
				{
					$subview: "dashboard.analitics"
				},
				{
					$subview: "dashboard.progress"
				},
				{
					type: "wide",
					cols: [
						{
							$subview: "dashboard.agents"
						},
						{
							$subview: "dashboard.sources"
						}
					]
				}
			]
		};
	}
}
