import {JetView} from "webix-jet";
import {estate} from "../../models/estate";

export default class DealDetailsVariantsView extends JetView {
	config() {
		const tabbar = {
			view: "tabbar",
			value: "all",
			localId: "tabbarFilter",
			options: [
				{value: "All", id: "all"},
				{value: "Favorite", id: "favorite"},
				{value: "Suggested", id: "suggested"},
				{value: "Rejected", id: "rejected"}
			],
			height: 50,
			on: {
				onChange: (id) => {
					const value = this.getParam("id", true);
					if (id !== "all") {
						this.$$("dataview").filter(obj => obj.dealId.toString() === value.toString() && obj.status === id);
					}
					else {
						this.$$("dataview").filter(obj => obj.dealId.toString() === value.toString());
					}
				}
			}
		};

		return {
			type: "clean",
			rows: [
				tabbar,
				{
					view: "dataview",
					localId: "dataview",
					xCount: 2,
					minWidth: 200,
					select: true,
					type: {
						width: "auto",
						height: 250,
						type: "tiles",
						template: obj => `
							<div class="estateVariants">
								<image class="estateImage" src="${obj.image ? `data/estate_images/${obj.image}.jpg` : "data/images/estate.jpg"}" />
								<div>
									<span class="estateLabel">${obj.label}</span>
									<span class="estatePrice"><b>Price: </b>$ ${obj.price}</span>
									<span class="estateAddress"><b>Address: </b>${obj.address}</span>
								</div>
							</div>
							<p class="estateDescription">${obj.description}</p>
						`
					}
				}
			]
		};
	}

	init() {
		const dataview = this.$$("dataview");
		const id = this.getParam("id", true);
		const category = this.getParam("category", true);
		dataview.sync(estate, () => {
			dataview.filter(item => item.dealId.toString() === id.toString());
		});

		dataview.attachEvent("onItemClick", (estateId) => {
			this.show(`/top/estateDetails?estateId=${estateId}?id=${id}?category=${category}`);
		});
	}
}
