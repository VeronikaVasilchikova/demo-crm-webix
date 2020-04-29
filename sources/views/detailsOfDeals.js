import {JetView} from "webix-jet";
import DealDetailsFormView from "./dealDetails/dealDetailsForm";
import DealDetailsBlockView from "./dealDetails/dealDetailsBlock";
import DealDetailsVariantsView from "./dealDetails/dealDetailsVariants";
import DealDetailsForSellView from "./dealDetails/dealDetailsForSell";

export default class DetailsOfDealsView extends JetView {
	config() {
		return {
			type: "space",
			rows: [
				{
					type: "space",
					cols: [
						{rows: [DealDetailsFormView]},
						{rows: [DealDetailsBlockView]}
					]
				},
				{localId: "variants", rows: [DealDetailsVariantsView], hidden: true},
				{localId: "sell", rows: [DealDetailsForSellView], hidden: true},
				{
					view: "button",
					value: "Close",
					click: () => this.closeDetails()
				}
			]
		};
	}

	init() {
		if (this.getParam("category") === "Sell") {
			this.$$("sell").show();
		}
		else{
			this.$$("variants").show();
		}
	}

	closeDetails() {
		this.show("./deals");
	}
}
