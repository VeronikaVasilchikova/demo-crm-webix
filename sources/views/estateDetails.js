import {JetView} from "webix-jet";
import {estateData} from "../models/estate";
import {deals} from "../models/deals";
import {agents} from "../models/agents";
import PopupContactAgentView from "./popupContactAgent";
import "../webix/photo";
import "../webix/profilelabel";

export default class EstateDetailsView extends JetView {
	socIcon(type) {
		return {
			view: "icon",
			localId: "icon",
			icon: `mdi mdi-${type}`,
			type,
			name: `${type}`,
			click: () => {
				window.open(this.$$("icon").config.value);
			}
		};
	}

	config() {
		const map = {
			key: "AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",
			view: "google-map",
			localId: "map",
			layerType: "marker",
			zoom: 6,
			center: [42.279250, -78.013763]
		};

		const agent = {
			view: "form",
			localId: "agentForm",
			height: 400,
			width: 450,
			rows: [
				{
					cols: [
						{},
						{
							view: "photo",
							width: 150,
							height: 150,
							name: "image",
							css: "estate_agent_photo"
						},
						{}
					]
				},
				{
					view: "profilelabel",
					css: "estate_agent_name",
					name: "name",
					borderless: true,
					template: obj => `<span>Agent: ${obj}</span>`
				},
				{
					cols: [
						{},
						this.socIcon("facebook"),
						this.socIcon("linkedin"),
						this.socIcon("instagram"),
						this.socIcon("youtube"),
						this.socIcon("twitter"),
						this.socIcon("vk"),
						{}
					]
				},
				{
					view: "button",
					label: "Contact agent",
					click: () => this.showInfo()
				}
			]
		};

		const statistics = {
			rows: [
				{
					template: "Demand",
					type: "header",
					css: "chart_header"
				},
				{
					view: "chart",
					localId: "chart",
					type: "bar",
					value: "#value#",
					label: "#value#",
					barWidth: 40,
					color: "#color#",
					tooltip: {
						template: "#value#"
					},
					xAxis: {
						template: "'#year#"
					},
					yAxis: {
						start: 0,
						end: 200,
						step: 50,
						template: (obj) => {
							if (obj % 25) {
								return "";
							}
							return obj;
						}
					},
					padding: {
						left: 30
					},
					radius: 2
				}
			]
		};

		const estate = {
			localId: "estate",
			height: 400,
			template: obj => `
				<span class="estateDetails_label">${obj.label}</span>
				<span class="estateDetails_address"><b>Address: </b> ${obj.address}</span>
				<span class="estateDetails_price"><b>Price: </b> $ ${obj.price}</span>
				<image class="estateDetails_img" src="${obj.image ? `data/estate_images/${obj.image}.jpg` : "data/images/estate.jpg"}" />
				<p class="estateDetails_descr">${obj.description}</p>
			`
		};

		const carousel = {
			rows: [
				{
					template: "Facilities",
					type: "header",
					css: "chart_header"
				},
				{
					view: "carousel",
					localId: "carousel",
					width: 512,
					height: 284,
					cols: [
						{css: "image", template: this.img, data: {src: "data/rooms/1.jpg"}},
						{css: "image", template: this.img, data: {src: "data/rooms/2.jpg"}},
						{css: "image", template: this.img, data: {src: "data/rooms/3.jpg"}},
						{css: "image", template: this.img, data: {src: "data/rooms/4.jpg"}},
						{css: "image", template: this.img, data: {src: "data/rooms/5.jpg"}}
					]
				}
			]
		};

		const icons = {
			height: 125,
			template: `
				<div class="facilities">
					<div>
						<i class="fas fa-bus"></i>
						<span>Bus stop</span>
					</div>
					<div>
						<i class="fas fa-parking"></i>
						<span>Parking</span>
					</div>
					<div>
						<i class="fas fa-tree"></i>
						<span>Forest</span>
					</div>
					<div>
						<i class="fas fa-dog"></i>
						<span>Pet walking area</span>
					</div>
					<div>
						<i class="fas fa-hospital"></i>
						<span>policlinic</span>
					</div>
					<div>
					<i class="fas fa-graduation-cap"></i>
						<span>School</span>
					</div>
				</div>
			`
		};

		return {
			rows: [
				{
					type: "wide",
					cols: [
						map,
						{
							view: "scrollview",
							scroll: "y",
							body: {
								type: "wide",
								rows: [
									estate,
									carousel,
									icons
								]
							}
						},
						{
							type: "wide",
							rows: [
								agent,
								statistics
							]
						}
					]
				},
				{
					view: "button",
					value: "Close",
					click: () => this.closeDetails(),
					css: "close_button"
				}
			]
		};
	}

	init() {
		this._jetPopupForm = this.ui(PopupContactAgentView);
		const estateId = this.getParam("estateId", true);
		const itemEstate = estateData.find(item => item.id.toString() === estateId.toString());
		this.$$("estate").parse(itemEstate);
		this.$$("map").parse(itemEstate);
		this.$$("chart").parse(itemEstate.demand);
		const item = deals.getItem(itemEstate.dealId).agentId;
		const itemAgent = agents.getItem(item);
		this.$$("agentForm").setValues(itemAgent);

		const icons = this.$$("agentForm").queryView({view: "icon"}, "all");
		icons.forEach((icon) => {
			if (!itemAgent[icon.config.type]) {
				icon.hide();
			}
		});
	}

	img(obj) {
		return `<img src="${obj.src}" class="content" ondragstart="return false"/>`;
	}

	showInfo() {
		const estateId = this.getParam("estateId", true);
		const itemEstate = estateData.find(item => item.id.toString() === estateId.toString());
		const item = deals.getItem(itemEstate.dealId).agentId;
		this._jetPopupForm.showPopupForm(item);
	}

	closeDetails() {
		const id = this.getParam("id", true);
		const category = this.getParam("category", true);
		const agent = this.getParam("agent", true);
		if (id && category) {
			this.show(`/top/detailsOfDeals?id=${id}?category=${category}`);
		}
		else if (agent) {
			this.show(`/top/agents?id=${agent}/agentsDetails`);
		}
		else {
			this.show("./listing");
		}
	}
}
