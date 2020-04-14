const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

export const analitics = new webix.DataCollection({
	data: [
		{id: 1, title: "Open deals", number: "34", amount: "421673", color: "blue"},
		{id: 2, title: "Lost deals", number: "15", amount: "211324", color: "red"},
		{id: 3, title: "Won deals", number: "4", amount: "311734", color: "green"}
	],
	scheme: {
		$init: (obj) => {
			obj.amount = numberToStr(obj.amount);
		}
	}
});
