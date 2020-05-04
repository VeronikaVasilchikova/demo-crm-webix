import {JetView} from "webix-jet";
import DealDetailsFormView from "./dealDetails/dealDetailsForm";
import DealDetailsBlockView from "./dealDetails/dealDetailsBlock";
import DealDetailsVariantsView from "./dealDetails/dealDetailsVariants";
import DealDetailsForSellView from "./dealDetails/dealDetailsForSell";

export default class DetailsOfDealsView extends JetView {
	config() {
		return {
			view: "scrollview",
			scroll: "y",
			body: {
				type: "wide",
				rows: [
					{
						type: "wide",
						cols: [
							{rows: [DealDetailsFormView], gravity: 1.2},
							{rows: [DealDetailsBlockView], gravity: 1}
						]
					},
					{
						height: 300,
						localId: "variants",
						rows: [DealDetailsVariantsView],
						hidden: true
					},
					{
						height: 300,
						localId: "sell",
						rows: [DealDetailsForSellView],
						hidden: true
					},
					{
						view: "button",
						value: "Close",
						click: () => this.closeDetails(),
						css: "close_button"
					}
				]
			}
		};
	}

	init() {
		if (this.getParam("category") === "Sell") {
			this.$$("sell").show();
		}
		else {
			this.$$("variants").show();
		}
	}

	closeDetails() {
		const kanban = this.getParam("kanban");
		if (kanban) {
			this.show("./deals?id=kanban");
		}
		else {
			this.show("./deals");
		}
	}
}
