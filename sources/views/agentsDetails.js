import {JetView} from "webix-jet";
import AgentsSplineChartView from "./agentDetails/agentsSplineChart";
import AgentsPieChartView from "./agentDetails/agentsPieChart";
import AgentsGoogleMapView from "./agentDetails/agentsGoogleMap";
import AgentsDealsView from "./agentDetails/agentsDeals";

export default class DetailsOfDealsView extends JetView {
	config() {
		return {
			view: "scrollview",
			scroll: "y",
			body: {
				type: "wide",
				rows: [
					{rows: [AgentsGoogleMapView], height: 300},
					{
						height: 290,
						type: "wide",
						cols: [
							{rows: [AgentsPieChartView], width: 250},
							{rows: [AgentsDealsView]}
						]
					},
					{
						height: 300,
						rows: [AgentsSplineChartView]
					}
				]
			}
		};
	}
}
