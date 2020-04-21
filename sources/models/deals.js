const strToDate = webix.Date.strToDate("%Y-%m-%d");
const dateToStr = webix.Date.dateToStr("%Y-%m-%d");

export const deals = new webix.DataCollection({
	data: [
		{
			id: 1,
			clientNameId: "1",
			dealCreated: "2019-12-01",
			agentId: "1",
			categoryId: "2",
			lastActivity: "2020-04-10",
			dealProgressId: "1",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2019-12-01"}
			]
		},
		{
			id: 2,
			clientNameId: "2",
			dealCreated: "2019-11-01",
			agentId: "2",
			categoryId: "1",
			lastActivity: "2020-04-08",
			dealProgressId: "",
			nextActivity: "",
			statusId: "2",
			activity: [
				{id: 1, value: "Request", date: "2019-11-01"},
				{id: 2, value: "Contacting", date: "2019-12-01"},
				{id: 3, value: "Define details", date: "2019-12-01"},
				{id: 4, value: "Tour Schedule", date: "2019-12-01"},
				{id: 5, value: "Paused", date: "2019-12-01"},
				{id: 6, value: "Listing agreement", date: "2019-12-01"},
				{id: 7, value: "Purchase offer", date: "2019-12-01"},
				{id: 8, value: "Escrow", date: "2019-12-01"},
				{id: 9, value: "Inspections", date: "2019-12-01"},
				{id: 10, value: "Lending", date: "2019-12-01"},
				{id: 11, value: "Closing", date: "2020-04-08"}
			]
		},
		{
			id: 3,
			clientNameId: "3",
			dealCreated: "2020-01-20",
			agentId: "7",
			categoryId: "3",
			lastActivity: "2020-04-11",
			dealProgressId: "7",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2020-01-20"},
				{id: 2, value: "Contacting", date: "2019-11-01"},
				{id: 3, value: "Define Details", date: "2019-11-01"},
				{id: 4, value: "Tour Scheduled", date: "2019-11-01"},
				{id: 5, value: "Paused", date: "2019-11-01"},
				{id: 6, value: "Listing Agreement", date: "2020-04-11"},
				{id: 7, value: "Purchase offer", date: "2019-12-01"}
			]
		},
		{
			id: 4,
			clientNameId: "4",
			dealCreated: "2020-02-01",
			agentId: "5",
			categoryId: "2",
			lastActivity: "2020-04-10",
			dealProgressId: "",
			nextActivity: "",
			statusId: "3",
			activity: [
				{id: 1, value: "Request", date: "2020-02-01"},
				{id: 2, value: "Closing", date: "2020-04-10"}
			]
		},
		{
			id: 5,
			clientNameId: "5",
			dealCreated: "2020-03-12",
			agentId: "3",
			categoryId: "3",
			lastActivity: "2020-04-04",
			dealProgressId: "",
			nextActivity: "",
			statusId: "2",
			activity: [
				{id: 1, value: "Request", date: "2020-03-12"},
				{id: 2, value: "Contacting", date: "2020-03-14"},
				{id: 3, value: "Define details", date: "2020-03-16"},
				{id: 4, value: "Tour Schedule", date: "2020-03-16"},
				{id: 5, value: "Paused", date: "2020-03-16"},
				{id: 6, value: "Listing agreement", date: "2020-03-16"},
				{id: 7, value: "Purchase offer", date: "2020-03-16"},
				{id: 8, value: "Escrow", date: "2020-03-20"},
				{id: 9, value: "Inspections", date: "2020-03-22"},
				{id: 10, value: "Lending", date: "2020-04-01"},
				{id: 11, value: "Closing", date: "2020-04-04"}
			]
		},
		{
			id: 6,
			clientNameId: "6",
			dealCreated: "2020-04-01",
			agentId: "1",
			categoryId: "1",
			lastActivity: "2020-04-10",
			dealProgressId: "2",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2020-04-01"},
				{id: 2, value: "Contacting", date: "2020-04-10"}
			]
		},
		{
			id: 7,
			clientNameId: "7",
			dealCreated: "2020-04-10",
			agentId: "8",
			categoryId: "1",
			lastActivity: "2020-04-11",
			dealProgressId: "",
			nextActivity: "",
			statusId: "3",
			activity: [
				{id: 1, value: "Request", date: "2020-04-10"},
				{id: 2, value: "Closing", date: "2020-04-11"}
			]
		},
		{
			id: 8,
			clientNameId: "8",
			dealCreated: "2019-12-28",
			agentId: "10",
			categoryId: "1",
			lastActivity: "2020-04-05",
			dealProgressId: "",
			nextActivity: "",
			statusId: "3",
			activity: [
				{id: 1, value: "Request", date: "2020-04-10"},
				{id: 2, value: "Closing", date: "2020-04-09"}
			]
		},
		{
			id: 9,
			clientNameId: "9",
			dealCreated: "2020-01-23",
			agentId: "4",
			categoryId: "2",
			lastActivity: "2020-04-10",
			dealProgressId: "",
			nextActivity: "",
			statusId: "2",
			activity: [
				{id: 1, value: "Request", date: "2020-01-23"},
				{id: 2, value: "Contacting", date: "2020-01-23"},
				{id: 3, value: "Define details", date: "2020-01-23"},
				{id: 4, value: "Listing agreement", date: "2020-01-23"},
				{id: 5, value: "Purchase offer", date: "2020-01-23"},
				{id: 6, value: "Lending", date: "2020-04-10"},
				{id: 7, value: "Closing", date: "2020-04-10"}
			]
		},
		{
			id: 10,
			clientNameId: "10",
			dealCreated: "2020-02-13",
			agentId: "6",
			categoryId: "3",
			lastActivity: "2020-04-08",
			dealProgressId: "5",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2020-02-13"},
				{id: 2, value: "Contacting", date: "2020-02-13"},
				{id: 3, value: "Define details", date: "2020-02-13"},
				{id: 4, value: "Tour Schedule", date: "2020-04-08"},
				{id: 5, value: "Paused", date: "2020-04-08"}
			]
		},
		{
			id: 11,
			clientNameId: "1",
			dealCreated: "2019-12-01",
			agentId: "3",
			categoryId: "2",
			lastActivity: "2020-04-10",
			dealProgressId: "4",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2019-12-01"},
				{id: 2, value: "Contacting", date: "2020-04-10"},
				{id: 3, value: "Define details", date: "2020-02-13"},
				{id: 4, value: "Tour Schedule", date: "2020-04-08"}
			]
		},
		{
			id: 12,
			clientNameId: "2",
			dealCreated: "2019-11-01",
			agentId: "4",
			categoryId: "1",
			lastActivity: "2020-04-08",
			dealProgressId: "",
			nextActivity: "",
			statusId: "2",
			activity: [
				{id: 1, value: "Request", date: "2019-11-01"},
				{id: 2, value: "Contacting", date: "2019-11-01"},
				{id: 3, value: "Define details", date: "2019-11-01"},
				{id: 4, value: "Listing agreement", date: "2019-11-01"},
				{id: 5, value: "Purchase offer", date: "2019-11-01"},
				{id: 6, value: "Lending", date: "2020-04-08"},
				{id: 7, value: "Closing", date: "2020-04-08"}
			]
		},
		{
			id: 13,
			clientNameId: "3",
			dealCreated: "2020-01-20",
			agentId: "9",
			categoryId: "3",
			lastActivity: "2020-04-11",
			dealProgressId: "8",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2020-01-20"},
				{id: 2, value: "Contacting", date: "2020-01-20"},
				{id: 3, value: "Define details", date: "2020-01-20"},
				{id: 4, value: "Tour Schedule", date: "2020-01-20"},
				{id: 5, value: "Paused", date: "2020-04-11"},
				{id: 6, value: "Listing agreement", date: "2020-04-11"},
				{id: 7, value: "Purchase offer", date: "2020-04-11"},
				{id: 8, value: "Escrow", date: "2020-04-11"}
			]
		},
		{
			id: 14,
			clientNameId: "4",
			dealCreated: "2020-02-01",
			agentId: "7",
			categoryId: "2",
			lastActivity: "2020-04-10",
			dealProgressId: "",
			nextActivity: "",
			statusId: "3",
			activity: [
				{id: 1, value: "Request", date: "2020-02-01"},
				{id: 2, value: "Closing", date: "2020-04-10"}
			]
		},
		{
			id: 15,
			clientNameId: "5",
			dealCreated: "2020-03-12",
			agentId: "5",
			categoryId: "3",
			lastActivity: "2020-04-04",
			dealProgressId: "",
			nextActivity: "",
			statusId: "2",
			activity: [
				{id: 1, value: "Request", date: "2020-03-12"},
				{id: 2, value: "Contacting", date: "2020-03-12"},
				{id: 3, value: "Define details", date: "2020-03-12"},
				{id: 4, value: "Listing agreement", date: "2020-03-12"},
				{id: 5, value: "Purchase offer", date: "2020-03-12"},
				{id: 6, value: "Lending", date: "2020-04-04"},
				{id: 7, value: "Closing", date: "2020-04-04"}
			]
		},
		{
			id: 16,
			clientNameId: "6",
			dealCreated: "2020-04-01",
			agentId: "3",
			categoryId: "1",
			lastActivity: "2020-04-01",
			dealProgressId: "1",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2020-04-01"}
			]
		},
		{
			id: 17,
			clientNameId: "7",
			dealCreated: "2020-04-10",
			agentId: "10",
			categoryId: "1",
			lastActivity: "2020-04-11",
			dealProgressId: "",
			nextActivity: "",
			statusId: "3",
			activity: [
				{id: 1, value: "Request", date: "2020-04-10"},
				{id: 2, value: "Closing", date: "2020-04-11"}
			]
		},
		{
			id: 18,
			clientNameId: "8",
			dealCreated: "2019-12-28",
			agentId: "8",
			categoryId: "1",
			lastActivity: "2020-04-05",
			dealProgressId: "",
			nextActivity: "",
			statusId: "3",
			activity: [
				{id: 1, value: "Request", date: "2019-12-28"},
				{id: 2, value: "Closing", date: "2020-04-05"}
			]
		},
		{
			id: 19,
			clientNameId: "9",
			dealCreated: "2020-01-23",
			agentId: "6",
			categoryId: "2",
			lastActivity: "2020-04-10",
			dealProgressId: "",
			nextActivity: "",
			statusId: "2",
			activity: [
				{id: 1, value: "Request", date: "2020-01-23"},
				{id: 2, value: "Contacting", date: "2020-01-23"},
				{id: 3, value: "Define details", date: "2020-01-23"},
				{id: 4, value: "Listing agreement", date: "2020-01-23"},
				{id: 5, value: "Purchase offer", date: "2020-01-23"},
				{id: 6, value: "Lending", date: "2020-04-10"},
				{id: 7, value: "Closing", date: "2020-04-10"}
			]
		},
		{
			id: 20,
			clientNameId: "10",
			dealCreated: "2020-02-13",
			agentId: "4",
			categoryId: "3",
			lastActivity: "2020-04-08",
			dealProgressId: "5",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2020-02-13"},
				{id: 2, value: "Contacting", date: "2020-02-13"},
				{id: 3, value: "Define details", date: "2020-02-13"},
				{id: 4, value: "Tour Schedule", date: "2020-02-13"},
				{id: 5, value: "Paused", date: "2020-04-08"}
			]
		},
		{
			id: 21,
			clientNameId: "1",
			dealCreated: "2019-12-01",
			agentId: "1",
			categoryId: "2",
			lastActivity: "2020-04-10",
			dealProgressId: "2",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2019-12-01"},
				{id: 2, value: "Contacting", date: "2020-04-10"}
			]
		},
		{
			id: 22,
			clientNameId: "2",
			dealCreated: "2019-11-01",
			agentId: "2",
			categoryId: "1",
			lastActivity: "2020-04-08",
			dealProgressId: "",
			nextActivity: "",
			statusId: "2",
			activity: [
				{id: 1, value: "Request", date: "2019-11-01"},
				{id: 2, value: "Contacting", date: "2019-11-01"},
				{id: 3, value: "Define details", date: "2019-11-01"},
				{id: 4, value: "Listing agreement", date: "2019-11-01"},
				{id: 5, value: "Purchase offer", date: "2019-11-01"},
				{id: 6, value: "Lending", date: "2020-04-08"},
				{id: 7, value: "Closing", date: "2020-04-08"}
			]
		},
		{
			id: 23,
			clientNameId: "3",
			dealCreated: "2020-01-20",
			agentId: "7",
			categoryId: "3",
			lastActivity: "2020-04-11",
			dealProgressId: "6",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2020-01-20"},
				{id: 2, value: "Contacting", date: "2020-01-20"},
				{id: 3, value: "Define details", date: "2020-01-20"},
				{id: 4, value: "Tour Schedule", date: "2020-01-20"},
				{id: 5, value: "Paused", date: "2020-04-11"},
				{id: 6, value: "Listing agreement", date: "2020-04-11"}
			]
		},
		{
			id: 24,
			clientNameId: "4",
			dealCreated: "2020-02-01",
			agentId: "5",
			categoryId: "2",
			lastActivity: "2020-04-10",
			dealProgressId: "",
			nextActivity: "",
			statusId: "3",
			activity: [
				{id: 1, value: "Request", date: "2020-02-01"},
				{id: 2, value: "Closing", date: "2020-04-10"}
			]
		},
		{
			id: 25,
			clientNameId: "5",
			dealCreated: "2020-03-12",
			agentId: "3",
			categoryId: "3",
			lastActivity: "2020-04-04",
			dealProgressId: "",
			nextActivity: "",
			statusId: "2",
			activity: [
				{id: 1, value: "Request", date: "2020-03-12"},
				{id: 2, value: "Contacting", date: "2020-03-12"},
				{id: 3, value: "Define details", date: "2020-03-12"},
				{id: 4, value: "Listing agreement", date: "2020-03-12"},
				{id: 5, value: "Purchase offer", date: "2020-03-12"},
				{id: 6, value: "Lending", date: "2020-04-04"},
				{id: 7, value: "Closing", date: "2020-04-04"}
			]
		},
		{
			id: 26,
			clientNameId: "6",
			dealCreated: "2020-04-01",
			agentId: "1",
			categoryId: "1",
			lastActivity: "2020-04-10",
			dealProgressId: "10",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2020-04-01"},
				{id: 2, value: "Contacting", date: "2020-04-01"},
				{id: 3, value: "Define details", date: "2020-04-01"},
				{id: 4, value: "Tour Schedule", date: "2020-04-01"},
				{id: 5, value: "Paused", date: "2020-04-01"},
				{id: 6, value: "Listing agreement", date: "2020-04-01"},
				{id: 7, value: "Purchase offer", date: "2020-04-01"},
				{id: 8, value: "Escrow", date: "2020-04-10"},
				{id: 9, value: "Inspections", date: "2020-04-10"},
				{id: 10, value: "Lending", date: "2020-04-10"}
			]
		},
		{
			id: 27,
			clientNameId: "7",
			dealCreated: "2020-04-10",
			agentId: "8",
			categoryId: "1",
			lastActivity: "2020-04-12",
			dealProgressId: "",
			nextActivity: "",
			statusId: "3",
			activity: [
				{id: 1, value: "Request", date: "2020-04-10"},
				{id: 2, value: "Closing", date: "2020-04-12"}
			]
		},
		{
			id: 28,
			clientNameId: "8",
			dealCreated: "2019-12-28",
			agentId: "10",
			categoryId: "1",
			lastActivity: "2020-04-05",
			dealProgressId: "",
			nextActivity: "",
			statusId: "3",
			activity: [
				{id: 1, value: "Request", date: "2019-12-28"},
				{id: 2, value: "Closing", date: "2020-04-05"}
			]
		},
		{
			id: 29,
			clientNameId: "9",
			dealCreated: "2020-01-23",
			agentId: "4",
			categoryId: "2",
			lastActivity: "2020-04-10",
			dealProgressId: "",
			nextActivity: "",
			statusId: "2",
			activity: [
				{id: 1, value: "Request", date: "2020-01-23"},
				{id: 2, value: "Contacting", date: "2020-01-23"},
				{id: 3, value: "Define details", date: "2020-01-23"},
				{id: 4, value: "Listing agreement", date: "2020-01-23"},
				{id: 5, value: "Purchase offer", date: "2020-01-23"},
				{id: 6, value: "Lending", date: "2020-04-10"},
				{id: 7, value: "Closing", date: "2020-04-10"}
			]
		},
		{
			id: 30,
			clientNameId: "10",
			dealCreated: "2020-02-13",
			agentId: "6",
			categoryId: "3",
			lastActivity: "2020-04-08",
			dealProgressId: "11",
			nextActivity: "",
			statusId: "1",
			activity: [
				{id: 1, value: "Request", date: "2020-02-13"},
				{id: 2, value: "Contacting", date: "2020-02-13"},
				{id: 3, value: "Define details", date: "2020-02-13"},
				{id: 4, value: "Tour Schedule", date: "2020-04-08"},
				{id: 5, value: "Paused", date: "2020-04-08"},
				{id: 6, value: "Listing agreement", date: "2020-04-08"},
				{id: 7, value: "Purchase offer", date: "2020-04-08"},
				{id: 8, value: "Escrow", date: "2020-04-08"},
				{id: 9, value: "Inspections", date: "2020-04-08"},
				{id: 10, value: "Lending", date: "2020-04-08"},
				{id: 11, value: "Closing", date: "2020-04-08"}
			]
		}
	],
	scheme: {
		$init: (obj) => {
			obj.dealCreated = strToDate(obj.dealCreated);
			obj.lastActivity = strToDate(obj.lastActivity);
			if (obj.statusId === "2") {
				obj.$css = "status_green";
			}
			else if (obj.statusId === "3") {
				obj.$css = "status_red";
			}
			else {
				obj.$css = "";
				obj.nextActivity = strToDate(webix.Date.add(new Date(obj.lastActivity), 2, "day"));
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
				obj.nextActivity = strToDate(webix.Date.add(new Date(obj.lastActivity), 2, "day"));
			}
		},
		$save: (obj) => {
			obj.dealCreated = dateToStr(obj.dealCreated);
			obj.lastActivity = dateToStr(obj.lastActivity);
			obj.nextActivity = dateToStr(obj.nextActivity);
		}
	}
});
