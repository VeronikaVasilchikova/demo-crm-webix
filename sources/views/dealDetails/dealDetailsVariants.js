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
						height: 200,
						type: "tiles",
						template: obj => `
							<div class="estateVariants">
								<image class="estateImage" src="${obj.image || "data/images/estate.jpg"}" />
								<div>
									<h3 class="estatePrice">$ ${obj.price}</h3>
									<h4 class="estateAddress">${obj.address}</h4>
									<p class="estateDescription">${obj.description}</p>
								</div>
							</div>
						`
					}
				}
			]
		};
	}

	init() {
		const dataview = this.$$("dataview");
		const id = this.getParam("id", true);
		dataview.sync(estate, () => {
			dataview.filter(item => item.dealId.toString() === id.toString());
		});
	}
}
