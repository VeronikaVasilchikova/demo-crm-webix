import {JetView} from "webix-jet";
import {agents} from "../models/agents";
import "../webix/phone";
import "../webix/email";

export default class PopupContactAgentView extends JetView {
	config() {
		return {
			view: "window",
			localId: "window",
			position: "center",
			width: 320,
			move: true,
			modal: true,
			head: "Contact agent",
			body: {
				view: "form",
				localId: "form",
				elements: [
					{
						view: "phone",
						name: "phone",
						css: "phone"
					},
					{
						view: "email",
						name: "email",
						css: "email"
					},
					{
						cols: [
							{},
							{
								view: "button",
								value: "Close",
								type: "form",
								click: () => this.closeForm()
							},
							{}
						]
					}
				]
			}
		};
	}

	init() {
		this.form = this.$$("form");
	}

	showPopupForm(id) {
		if (id && agents.exists(id)) {
			const item = webix.copy(agents.getItem(id));
			this.form.setValues(item);
		}
		this.getRoot().show();
	}

	closeForm() {
		this.form.clear();
		this.getRoot().hide();
	}
}
