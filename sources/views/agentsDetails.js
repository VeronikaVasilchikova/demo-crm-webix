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
				{rows: [AgentsGoogleMapView]},
				{
					type: "space",
					cols: [
						{rows: [AgentsPieChartView], gravity: 1},
						{rows: [AgentsDealsView], gravity: 3}
					]
				}

			]
		};
	}
}
