const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

export const analitics = new webix.DataCollection({
	data: [
		{
			id: 1,
			period: "week",
			title: [
				{id: 1, value: "Open deals", color: "", number: "4", amount: "40000"},
				{id: 2, value: "Lost deals", color: "red", number: "3", amount: "30000"},
				{id: 3, value: "Won deals", color: "green", number: "6", amount: "60000"}
			]
		},
		{
			id: 2,
			period: "month",
			title: [
				{id: 1, value: "Open deals", color: "", number: "15", amount: "150000"},
				{id: 2, value: "Lost deals", color: "red", number: "5", amount: "50000"},
				{id: 3, value: "Won deals", color: "green", number: "12", amount: "120000"}
			]
		},
		{
			id: 3,
			period: "90days",
			title: [
				{id: 1, value: "Open deals", color: "", number: "25", amount: "250000"},
				{id: 2, value: "Lost deals", color: "red", number: "7", amount: "70000"},
				{id: 3, value: "Won deals", color: "green", number: "36", amount: "360000"}
			]
		}
	],
	scheme: {
		$init: (obj) => {
			obj.title.forEach((item) => {
				item.amount = numberToStr(item.amount);
			});
		}
	}
});
