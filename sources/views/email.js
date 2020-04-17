import {JetView} from "webix-jet";
import {comments} from "../models/comments";
import {users} from "../models/users";

export default class EmailView extends JetView {
	config() {
		return {
			view: "comments",
			currentUser: 2,
			data: comments,
			users
		};
	}
}
