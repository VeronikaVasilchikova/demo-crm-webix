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
		{id: 10, dealId: "10", name: "Agreement10", changeDate: "2020-04-02", sizetext: "134"},
		{id: 11, dealId: "11", name: "Agreement11", changeDate: "2020-04-02", sizetext: "84"},
		{id: 12, dealId: "12", name: "Agreement12", changeDate: "2020-03-02", sizetext: "100"},
		{id: 13, dealId: "13", name: "Agreement13", changeDate: "2020-04-12", sizetext: "142"},
		{id: 14, dealId: "14", name: "Agreement14", changeDate: "2020-03-14", sizetext: "96"},
		{id: 15, dealId: "15", name: "Agreement15", changeDate: "2020-04-02", sizetext: "98"},
		{id: 16, dealId: "16", name: "Agreement16", changeDate: "2020-04-02", sizetext: "89"},
		{id: 17, dealId: "17", name: "Agreement17", changeDate: "2020-01-18", sizetext: "90"},
		{id: 18, dealId: "18", name: "Agreement18", changeDate: "2020-04-02", sizetext: "92"},
		{id: 19, dealId: "19", name: "Agreement19", changeDate: "2020-01-28", sizetext: "110"},
		{id: 20, dealId: "20", name: "Agreement20", changeDate: "2020-04-02", sizetext: "134"},
		{id: 21, dealId: "21", name: "Agreement21", changeDate: "2020-04-02", sizetext: "84"},
		{id: 22, dealId: "22", name: "Agreement22", changeDate: "2020-03-02", sizetext: "100"},
		{id: 23, dealId: "23", name: "Agreement23", changeDate: "2020-04-12", sizetext: "142"},
		{id: 24, dealId: "24", name: "Agreement24", changeDate: "2020-03-14", sizetext: "96"},
		{id: 25, dealId: "25", name: "Agreement25", changeDate: "2020-04-02", sizetext: "98"},
		{id: 26, dealId: "26", name: "Agreement26", changeDate: "2020-04-02", sizetext: "89"},
		{id: 27, dealId: "27", name: "Agreement27", changeDate: "2020-01-18", sizetext: "90"},
		{id: 28, dealId: "28", name: "Agreement28", changeDate: "2020-04-02", sizetext: "92"},
		{id: 29, dealId: "29", name: "Agreement29", changeDate: "2020-01-28", sizetext: "110"},
		{id: 30, dealId: "30", name: "Agreement30", changeDate: "2020-04-02", sizetext: "134"}
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
