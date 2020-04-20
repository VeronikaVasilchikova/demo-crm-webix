const strToDate = webix.Date.strToDate("%Y-%m-%d");
const dateToStr = webix.Date.dateToStr("%Y-%m-%d");

export const documents = new webix.DataCollection({
	data: [
		{id: 1, dealId: "1", name: "Agreement1", changeDate: "2020-04-02", sizetext: "84"},
		{id: 2, dealId: "2", name: "Agreement2", changeDate: "2020-03-02", sizetext: "100"},
		{id: 3, dealId: "3", name: "Agreement3", changeDate: "2020-04-12", sizetext: "142"},
		{id: 4, dealId: "4", name: "Agreement4", changeDate: "2020-03-14", sizetext: "96"},
		{id: 5, dealId: "5", name: "Agreement5", changeDate: "2020-04-02", sizetext: "98"},
		{id: 6, dealId: "6", name: "Agreement6", changeDate: "2020-04-02", sizetext: "89"},
		{id: 7, dealId: "7", name: "Agreement7", changeDate: "2020-01-18", sizetext: "90"},
		{id: 8, dealId: "8", name: "Agreement8", changeDate: "2020-04-02", sizetext: "92"},
		{id: 9, dealId: "9", name: "Agreement9", changeDate: "2020-01-28", sizetext: "110"},
		{id: 10, dealId: "10", name: "Agreement10", changeDate: "2020-04-02", sizetext: "134"}
	],
	scheme: {
		$init: (obj) => {
			obj.changeDate = strToDate(obj.changeDate);
		},
		$save: (obj) => {
			obj.changeDate = dateToStr(obj.changeDate);
		}
	}
});

