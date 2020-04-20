import {JetView} from "webix-jet";
import {activity} from "../models/activity";

export default class ActivityView extends JetView {
	config() {
		const color = (obj) => {
			if (obj.value === "Available") return "#55CD97";
			if (obj.value === "Taken") return "#1CA1C1";
			if (obj.value === "Broken") return "#FF5C4C";
			if (obj.value === "Fixed") return "orange";
			if (obj.value === "Deprecated") return "#94A1B3";
			return "";
		};

		return {
			view: "timeline",
			type: {
				lineColor: color,
				type: "alternate"
			},
			data: activity
		};
	}
}
