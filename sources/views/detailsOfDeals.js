import {JetView} from "webix-jet";
import DealDetailsFormView from "./dealDetails/dealDetailsForm";
import DealDetailsBlockView from "./dealDetails/dealDetailsBlock";
import DealDetailsVariantsView from "./dealDetails/dealDetailsVariants";

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
				{rows: [DealDetailsVariantsView]},
				{
					view: "button",
					value: "Close",
					click: () => this.closeDetails()
				}
			]
		};
	}

	closeDetails() {
		this.show("./deals");
	}
}
