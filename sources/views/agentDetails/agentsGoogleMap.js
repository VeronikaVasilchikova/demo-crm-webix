import {JetView} from "webix-jet";
import {estateData} from "../../models/estate";
import {data} from "../../models/deals";
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
						{id: 2, value: "Sold"},
						{id: 3, value: "For Rent"},
						{id: 4, value: "For Sale"}
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
					<div class="estate_left">
						<image class="estate" src="${obj.image ? `data/estate_images/${obj.image}.jpg` : "data/images/estate.jpg"}" />
						<div>
							<span class="estate_label">${obj.label}</span>
							<span class="estate_address"><b>Address:</b> ${obj.address}</span>
							<span class="estate_price"><b>Price:</b> $ ${obj.price}</span>
						</div>
					</div>
				`,
				height: 80
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
			type: "wide",
			cols: [
				{
					type: "wide",
					cols: [
						{
							width: 250,
							rows: [
								{
									template: "Filter",
									type: "header"
								},
								form
							]
						},
						{
							width: 400,
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
		const agent = this.getParam("id", true);
		this.list.attachEvent("onItemClick", (estateId) => {
			this.show(`/top/estateDetails?estateId=${estateId}?agent=${agent}`);
		});

		const deals = data.filter(item => item.agentId.toString() === agent.toString())
			.map(item => item.id);
		let agentEstate = [];
		deals.forEach((item) => {
			agentEstate.push(estateData.filter(node => node.dealId.toString() === item.toString()));
		});
		agentEstate = agentEstate.flat();

		this.radio.setValue("1");
		this.map.clearAll();
		this.list.clearAll();

		webix.promise.all([
			agentEstate.waitData,
			agents.waitData
		]).then(() => {
			if (agent && agents.exists(agent)) {
				this.map.parse(agentEstate);
				this.list.parse(agentEstate);
			}
			this.$$("radio").attachEvent("onChange", (newv) => {
				this.map.clearAll();
				this.list.clearAll();
				if (newv === "1") {
					this.map.parse(agentEstate);
					this.list.parse(agentEstate);
				}
				else {
					this.map.parse(agentEstate.filter(item => Number(item.categoryId) === Number(newv) - 1));
					this.list.parse(agentEstate.filter(item => Number(item.categoryId) === Number(newv) - 1));
				}
			});
		});
	}
}
