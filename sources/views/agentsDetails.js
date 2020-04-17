import {JetView} from "webix-jet";
import AgentsSplineChartView from "./agentDetails/agentsSplineChart";
import AgentsPieChartView from "./agentDetails/agentsPieChart";
import AgentsGoogleMapView from "./agentDetails/agentsGoogleMap";
import AgentsDealsView from "./agentDetails/agentsDeals";

export default class DetailsOfDealsView extends JetView {
	config() {
		return {
			type: "space",
			rows: [
				{rows: [AgentsSplineChartView]},
				{
					type: "space",
					cols: [
						{rows: [AgentsPieChartView]},
						{rows: [AgentsGoogleMapView]}
					]
				},
				{rows: [AgentsDealsView]}
			]
		};
	}
}
