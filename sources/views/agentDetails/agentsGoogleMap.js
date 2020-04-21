import {JetView} from "webix-jet";
import {agentEstate} from "../../models/agentEstate";
import {agents} from "../../models/agents";

export default class AgentsGoogleMapView extends JetView {
	config() {
		const form = {
			view: "form",
			localId: "form",
			elements: [
				{
					view: "radio",
					localId: "radio",
					name: "radio",
					vertical: true,
					value: "1",
					options: [
						{id: 1, value: "All"},
						{id: 2, value: "Buy"},
						{id: 3, value: "Sell"},
						{id: 4, value: "Rent"}
					]
				},
				{}
			]
		};

		const list = {
			view: "list",
			localId: "list",
			type: {
				template: obj => `
					<span class="estate_label">${obj.label}</span>
					<span class="estate_address"><b>Address:</b> ${obj.address}</span>
					<span class="estate_price"><b>Price:</b> $ ${obj.price}</span>
				`,
				height: 60
			}
		};

		const map = {
			key: "AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",
			view: "google-map",
			localId: "map",
			layerType: "marker",
			zoom: 5,
			center: [42.279250, -78.013763]
		};

		return {
			cols: [
				{
					type: "space",
					cols: [
						{
							gravity: 1,
							rows: [
								{
									template: "Filter",
									type: "header"
								},
								form
							]
						},
						{
							gravity: 2,
							rows: [
								{
									template: "List of estates",
									type: "header"
								},
								list
							]
						}
					]
				},
				map
			]
		};
	}

	init() {
		this.map = this.$$("map");
		this.list = this.$$("list");
		this.form = this.$$("form");
		this.radio = this.$$("radio");
	}

	urlChange() {
		webix.promise.all([
			agentEstate.waitData,
			agents.waitData
		]).then(() => {
			const id = this.getParam("id", true);
			if (id && agents.exists(id)) {
				this.map.clearAll();
				this.list.clearAll();

				this.map.parse(agentEstate.filter(item => item.agentId.toString() === id.toString()));
				this.list.parse(agentEstate.filter(item => item.agentId.toString() === id.toString()));
			}
			this.$$("radio").attachEvent("onChange", (newv) => {
				this.map.clearAll();
				this.list.clearAll();
				if (newv === "1") {
					this.map.parse(agentEstate.filter(item => item.agentId.toString() === id.toString()));
					this.list.parse(agentEstate.filter(item => item.agentId.toString() === id.toString()));
				}
				else if (newv === "2") {
					this.map.parse(agentEstate.filter(item => item.agentId.toString() === id.toString() && item.status === "Buy"));
					this.list.parse(agentEstate.filter(item => item.agentId.toString() === id.toString() && item.status === "Buy"));
				}
				else if (newv === "3") {
					this.map.parse(agentEstate.filter(item => item.agentId.toString() === id.toString() && item.status === "Sell"));
					this.list.parse(agentEstate.filter(item => item.agentId.toString() === id.toString() && item.status === "Sell"));
				}
				else {
					this.map.parse(agentEstate.filter(item => item.agentId.toString() === id.toString() && item.status === "Rent"));
					this.list.parse(agentEstate.filter(item => item.agentId.toString() === id.toString() && item.status === "Rent"));
				}
			});
		});
	}
}
