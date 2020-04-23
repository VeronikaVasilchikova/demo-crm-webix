import {JetView} from "webix-jet";
import {deals} from "../models/deals";

export default class ActivityView extends JetView {
	config() {
		const color = (obj) => {
			if (obj.value === "Contacting") return "#0af525";
			if (obj.value === "Define details") return "#ffeb3b";
			if (obj.value === "Tour Schedule") return "#ef6f05";
			if (obj.value === "Paused") return "#f44336";
			if (obj.value === "Listing agreement") return "#00bcd4";
			if (obj.value === "Purchse offer") return "#e91e63";
			if (obj.value === "Escrow") return "#4caf50";
			if (obj.value === "Inspections") return "#009688";
			if (obj.value === "Lending") return "#6b0404";
			if (obj.value === "Closing") return "#2008f9";
			return "";
		};

		return {
			view: "timeline",
			localId: "timeline",
			type: {
				lineColor: color,
				type: "alternate"
			}
		};
	}

	init() {
		this.timeline = this.$$("timeline");
	}

	urlChange() {
		const id = this.getParam("id", true);
		if (id && deals.exists(id)) {
			const item = deals.getItem(id);
			this.timeline.parse(item.activity);
		}
	}
}
