import {JetView} from "webix-jet";
import {agents} from "../models/agents";
import "../webix/nstateicon";

export default class AgentssView extends JetView {
	config() {
		return {
			type: "wide",
			cols: [
				{
					rows: [
						{
							view: "toolbar",
							localId: "toolbar",
							visibleBatch: "default",
							elements: [
								{width: 8},
								{
									view: "label",
									label: "Agents",
									batch: "default"
								},
								{batch: "default"},
								{
									view: "text",
									batch: "search",
									localId: "search",
									on: {
										onTimedKeyPress() {
											const input = this.getValue().toLowerCase();
											this.$scope.$$("list").filter(obj => obj.name.toLowerCase().indexOf(input) !== -1);
										}
									}
								},
								{
									view: "nstateicon",
									localId: "nstateicon",
									icons: ["mdi mdi-magnify", "mdi mdi-close"],
									states: ["default", "search"],
									on: {
										onStateChange: (state) => {
											const batch = this.$$("nstateicon").config.states[state];
											this.$$("toolbar").showBatch(batch);
											if (batch === "search") {
												this.$$("search").focus();
											}
										}
									}
								},
								{
									view: "icon",
									icon: "mdi mdi-arrow-down",
									localId: "arrowIcon",
									tooltip: "Click to sort",
									click: () => {
										let dir = "";
										if (this.$$("arrowIcon").config.icon.indexOf("up") !== -1) {
											dir = "desc";
											this.$$("arrowIcon").config.icon = "mdi mdi-arrow-down";
										}
										else {
											dir = "asc";
											this.$$("arrowIcon").config.icon = "mdi mdi-arrow-up";
										}
										this.$$("list").sort("name", dir);
										this.$$("arrowIcon").refresh();
									}
								}
							]
						},
						{
							view: "list",
							localId: "list",
							css: "agents_list",
							width: 220,
							select: true,
							type: {
								template: obj => `
									<image class="agentPhoto" src="${obj.image ? `data/agents_images/${obj.image}.png` : "data/photos/contact_photo.jpg"}"/>
									<div class="text">
											<span class="agentName">${obj.name}</span>
											<span class="agentMoney">$ ${obj.topDealValue}</span>
									</div>`,
								height: 66
							}
						}
					]
				},
				{$subview: true}
			]
		};
	}

	init() {
		this.list = this.$$("list");
		this.list.sync(agents);
		this.list.attachEvent("onItemClick", (id) => {
			this.setParam("id", id, true);
		});

		agents.waitData.then(() => {
			const id = this.getParam("id") ? this.getParam("id") : this.list.getFirstId();
			this.list.select(id);
			this.setParam("id", id, true);
			this.show("./agentsDetails");
		});
	}

	urlChange() {
		const id = this.getParam("id");
		if (id && agents.exists(id)) {
			this.list.select(id);
		}
	}
}
