import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
	config() {
		const sidebar = {
			localId: "menu",
			view: "sidebar",
			css: "webix_dark",
			width: 150,
			data: [
				{id: "dashboard", value: "Dashboard", icon: "mdi mdi-home"},
				{id: "deals", value: "Deals", icon: "mdi mdi-briefcase"},
				{id: "agents", value: "Agents", icon: "mdi mdi-face-agent"},
				{id: "tasks", value: "Tasks", icon: "mdi mdi-timetable"},
				{id: "contactus", value: "Contact us", icon: "mdi mdi-contacts"}
			]
		};

		const toolbar = {
			view: "toolbar",
			padding: 5,
			height: 50,
			cols: [
				{
					view: "icon",
					icon: "mdi mdi-menu",
					click: () => this.$$("menu").toggle()
				},
				{

				},
				{
					view: "icon",
					icon: "mdi mdi-bell",
					badge: "5"
				},
				{
					view: "icon",
					icon: "mdi mdi-settings"
				},
				{
					template: `
						<span class="agentname">Reney Mckelney</span>
						<span>Account Settings</span>
					`,
					width: 150,
					borderless: true
				},
				{
					template: `
						<image class="main_photo" src="data/photos/contact_photo.jpg">
						<span class="webix_icon mdi mdi-circle status green"></span>
					`,
					width: 60,
					css: "avatar",
					borderless: true
				}
			]
		};

		return {
			rows: [
				toolbar,
				{
					cols: [
						sidebar,
						{$subview: true}
					]
				}
			]
		};
	}

	init() {
		this.use(plugins.Menu, "menu");
	}
}
