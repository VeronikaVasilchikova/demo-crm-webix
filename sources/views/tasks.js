import {JetView} from "webix-jet";

export default class TasksView extends JetView {
	config() {
		return {
			css: "ifr_template",
			view: "iframe",
			localId: "iframe",
			on: {
				onAfterLoad() {
					try {
						this.getWindow().document.querySelector(".global-header").style.display = "none";
						this.getWindow().document.querySelector(".section-info-row-get-start").style.display = "none";
						this.getWindow().document.querySelector(".global-footer-wrap").style.display = "none";
					}
					catch (err) { /* when demo is opened on localhost */ }
					if (this.hideProgress) {
						this.hideProgress();
					}
					this.enable();
				}
			}
		};
	}

	init() {
		webix.extend(this.$$("iframe"), webix.ProgressBar);
		this.$$("iframe").disable();
		this.$$("iframe").showProgress({type: "icon"});
		this.$$("iframe").load("https://webix.com/scheduler/");
	}
}
