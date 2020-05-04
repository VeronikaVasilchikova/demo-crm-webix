import {JetView} from "webix-jet";
import {estateData} from "../models/estate";
import "../webix/nstateicon";

export default class ListingView extends JetView {
	config() {
		const form = {
			view: "form",
			localId: "form",
			elements: [
				{
					view: "radio",
					localId: "radio",
					name: "radio",
					value: "1",
					label: "Filter",
					options: [
						{id: 1, value: "All"},
						{id: 2, value: "Sold"},
						{id: 3, value: "For Rent"},
						{id: 4, value: "For Sale"}
					]
				}
			]
		};

		const toolbar = {
			view: "toolbar",
			localId: "toolbar",
			visibleBatch: "default",
			elements: [
				{width: 8},
				{
					view: "label",
					label: "Estates",
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
							this.$scope.$$("estates").filter(obj => obj.label.toLowerCase().indexOf(input) !== -1
								&& obj.address.toLowerCase().indexOf(input) !== -1);
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
				}
			]
		};

		const estates = {
			view: "dataview",
			localId: "estates",
			xCount: 2,
			select: true,
			type: {
				height: 320,
				width: 300
			},
			template: obj => `
					<div class="listing">
						<image class="listing_estate" src="${obj.image ? `data/estate_images/${obj.image}.jpg` : "data/images/estate.jpg"}" />
						<div>
							<span class="listing_label">${obj.label}</span>
							<span class="listing_descr"><b>Address: </b> ${obj.address}</span>
							<span class="listing_price"><b>Price: </b> $ ${obj.price}</span>
						</div>
					</div>
				`
		};

		const map = {
			key: "AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",
			view: "google-map",
			localId: "map",
			layerType: "marker",
			zoom: 6,
			center: [42.279250, -78.013763]
		};

		return {
			cols: [
				{
					rows: [
						{
							type: "clean",
							rows: [
								toolbar,
								form
							]
						},
						estates
					]
				},
				map
			]
		};
	}

	init() {
		this.map = this.$$("map");
		this.estates = this.$$("estates");
		this.form = this.$$("form");
		this.radio = this.$$("radio");

		this.estates.attachEvent("onItemClick", (id) => {
			this.show(`/top/estateDetails?estateId=${id}`);
		});
	}

	urlChange() {
		this.radio.setValue("1");
		this.map.clearAll();
		this.estates.clearAll();

		this.estates.parse(estateData);
		this.map.parse(estateData);

		this.$$("radio").attachEvent("onChange", (newv) => {
			this.map.clearAll();
			this.estates.clearAll();
			if (newv === "1") {
				this.estates.parse(estateData);
				this.map.parse(estateData);
			}
			else {
				this.map.parse(estateData.filter(item => Number(item.categoryId) === Number(newv) - 1));
				this.estates.parse(estateData.filter(item => Number(item.categoryId) === Number(newv) - 1));
			}
		});
	}
}
