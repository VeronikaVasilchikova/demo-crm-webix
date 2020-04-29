import {JetView} from "webix-jet";
import {estate} from "../../models/estate";

export default class DealDetailsForSellView extends JetView {
	config() {
		const temp = {
			localId: "sell",
			template: obj => `
				<div class="estateVariants">
					<div class="estateVariants_left">
						<image class="estateImage" src="${obj.image ? `data/estate_images/${obj.image}.jpg` : "data/images/estate.jpg"}" />
					</div>
					<div>
						<h3 class="estatePrice">${obj.label}</h3>
						<h3 class="estatePrice">$ ${obj.price}</h3>
						<h4 class="estateAddress">${obj.address}</h4>
						<p class="estateDescription">${obj.description}</p>
					</div>
				</div>
			`
		};

		return {
			type: "clean",
			rows: [
				temp
			]
		};
	}

	init() {
		const id = this.getParam("id", true);
		const item = estate.getItem(id);
		this.$$("sell").parse(item);
	}
}
