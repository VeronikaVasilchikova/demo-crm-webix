import {JetView} from "webix-jet";
import {comments} from "../models/comments";
import {users} from "../models/users";

export default class EmailView extends JetView {
	config() {
		return {
			view: "comments",
			localId: "comments",
			users
		};
	}

	init() {
		this.comments = this.$$("comments");
	}

	urlChange() {
		const id = this.getParam("id", true);
		if (id && comments.exists(id)) {
			const item = comments.getItem(id);
			this.comments.parse(item.dialogue);
			this.comments.config.currentUser = item.currentUser;
		}
	}
}
