import {JetView} from "webix-jet";
import {estate} from "../../models/estate";

export default class DealDetailsForSellView extends JetView {
	config() {
		return {
			view: "dataview",
			localId: "dataviewSell",
			minWidth: 200,
			select: true,
			type: {
				width: "auto",
				height: 250,
				type: "tiles",
				template: obj => `
					<div class="estateVariants sell">
						<image class="estateImage sell" src="${obj.image ? `data/estate_images/${obj.image}.jpg` : "data/images/estate.jpg"}" />
						<div>
							<span class="estateLabel sell">${obj.label}</span>
							<span class="estatePrice sell"><b>Price: </b>$ ${obj.price}</span>
							<span class="estateAddress sell"><b>Address: </b>${obj.address}</span>
							<p class="estateDescription sell">${obj.description}</p>
						</div>
					</div>
				`
			}
		};
	}

	init() {
		const id = this.getParam("id", true);
		this.$$("dataviewSell").sync(estate, () => {
			this.$$("dataviewSell").filter(item => item.dealId.toString() === id.toString());
		});
		const category = this.getParam("category", true);

		this.$$("dataviewSell").attachEvent("onItemClick", (estateId) => {
			this.show(`/top/estateDetails?estateId=${estateId}?id=${id}?category=${category}`);
		});
	}
}
