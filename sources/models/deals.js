const strToDate = webix.Date.strToDate("%Y-%m-%d");
const dateToStr = webix.Date.dateToStr("%Y-%m-%d");

export const deals = new webix.DataCollection({
	data: [
		{id: 1, clientName: "Cyril Barone", dealCreated: "2019-12-01", agentId: "1", categoryId: "2", lastActivity: "2020-04-10", dealProgressId: "2", nextActivity: "", statusId: "1"},
		{id: 2, clientName: "Dottie Ward", dealCreated: "2019-11-01", agentId: "2", categoryId: "1", lastActivity: "2020-04-08", dealProgressId: "", nextActivity: "", statusId: "2"},
		{id: 3, clientName: "Tommie Shurtleff", dealCreated: "2020-01-20", agentId: "7", categoryId: "3", lastActivity: "2020-04-11", dealProgressId: "6", nextActivity: "", statusId: "1"},
		{id: 4, clientName: "Jesse Holdman", dealCreated: "2020-02-01", agentId: "5", categoryId: "2", lastActivity: "2020-04-10", dealProgressId: "", nextActivity: "", statusId: "3"},
		{id: 5, clientName: "Isaiah Greggs", dealCreated: "2020-03-12", agentId: "3", categoryId: "3", lastActivity: "2020-04-04", dealProgressId: "", nextActivity: "", statusId: "2"},
		{id: 6, clientName: "Lacy Fordham", dealCreated: "2020-04-01", agentId: "1", categoryId: "1", lastActivity: "2020-04-10", dealProgressId: "11", nextActivity: "", statusId: "1"},
		{id: 7, clientName: "Camilla Mcculley", dealCreated: "2020-04-10", agentId: "8", categoryId: "1", lastActivity: "2020-04-09", dealProgressId: "", nextActivity: "", statusId: "3"},
		{id: 8, clientName: "Gita Noda", dealCreated: "2019-12-28", agentId: "10", categoryId: "1", lastActivity: "2020-04-05", dealProgressId: "", nextActivity: "", statusId: "3"},
		{id: 9, clientName: "Rolando Schulze", dealCreated: "2020-01-23", agentId: "4", categoryId: "2", lastActivity: "2020-04-10", dealProgressId: "", nextActivity: "", statusId: "2"},
		{id: 10, clientName: "Abdul Abshire", dealCreated: "2020-02-13", agentId: "6", categoryId: "3", lastActivity: "2020-04-08", dealProgressId: "5", nextActivity: "", statusId: "1"}
	],
	scheme: {
		$init: (obj) => {
			obj.dealCreated = strToDate(obj.dealCreated);
			obj.lastActivity = strToDate(obj.lastActivity);
			obj.nextActivity = strToDate(webix.Date.add(new Date(obj.lastActivity), 2, "day"));
			if (obj.statusId === "2") {
				obj.$css = "status_green";
			}
			else if (obj.statusId === "3") {
				obj.$css = "status_red";
			}
			else {
				obj.$css = "";
			}
		},
		$change: (obj) => {
			if (obj.statusId === "2") {
				obj.$css = "status_green";
			}
			else if (obj.statusId === "3") {
				obj.$css = "status_red";
			}
			else {
				obj.$css = "";
			}
		},
		$save: (obj) => {
			obj.dealCreated = dateToStr(obj.dealCreated);
			obj.lastActivity = dateToStr(obj.lastActivity);
			obj.nextActivity = dateToStr(obj.nextActivity);
		}
	}
});
