import {JetApp, EmptyRouter, HashRouter} from "webix-jet";
import "./styles/app.css";

export default class MyApp extends JetApp {
	constructor(config) {
		const defaults = {
			id: APPNAME,
			version: VERSION,
			router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug: true,
			start: "/top/dashboard"
		};

		super({...defaults, ...config});
	}
}

if (!BUILD_AS_MODULE) {
	webix.ready(() => {
		const app = new MyApp();
		app.render();
		app.attachEvent("app:error:resolve", () => {
			webix.delay(() => app.show("/top/dashboard"));
		});
		if (!webix.env.touch && webix.env.scrollSize) {
			webix.CustomScroll.init();
		}
	});
}
