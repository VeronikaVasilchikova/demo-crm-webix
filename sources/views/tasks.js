import {JetView} from "webix-jet";
import {schedulerData} from "../models/schedulerData";

export default class TasksView extends JetView {
	config() {
		const config = {
			view: "scheduler",
			localId: "scheduler",
			css: "iphone"
		};
		return webix.require({
			"https://cdn.webix.com/site/scheduler/scheduler.js?v=7.2.7": true,
			"https://cdn.webix.com/site/scheduler/scheduler.css?v=7.2.7": true
		}).then(() => config);
	}

	init() {
		this.$$("scheduler").parse(schedulerData);
	}
}
