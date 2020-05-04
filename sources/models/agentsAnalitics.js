const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

const data = [
	{
		id: "1",
		period: "last week",
		title: [
			{id: 1, name: "Samuel Jones", wonDeal: "2019-08-14", topDealValue: "310027", rating: "31", location: "New York"},
			{id: 2, name: "Maryam Miller", wonDeal: "2019-08-13", topDealValue: "592455", rating: "59", location: "Ontario"},
			{id: 3, name: "Joseph Anderson", wonDeal: "2019-08-13", topDealValue: "452000", rating: "45", location: "Milan"},
			{id: 4, name: "Charlie Robinson", wonDeal: "2019-08-13", topDealValue: "552088", rating: "55", location: "Las Vegas"},
			{id: 5, name: "Liss Young", wonDeal: "2019-08-13", topDealValue: "692700", rating: "69", location: "San Francisco"},
			{id: 6, name: "Rick Scott", wonDeal: "2019-08-14", topDealValue: "340027", rating: "34", location: "New York"},
			{id: 7, name: "William Farrell", wonDeal: "2019-08-13", topDealValue: "492455", rating: "49", location: "Ontario"},
			{id: 8, name: "George Moore", wonDeal: "2019-08-13", topDealValue: "652000", rating: "65", location: "Milan"},
			{id: 9, name: "David Baker", wonDeal: "2019-08-13", topDealValue: "442088", rating: "44", location: "Las Vegas"},
			{id: 10, name: "Sophia Walker", wonDeal: "2019-08-13", topDealValue: "892700", rating: "89", location: "San Francisco"}
		]
	},
	{
		id: "2",
		period: "last month",
		title: [
			{id: 1, name: "Samuel Jones", wonDeal: "2019-08-14", topDealValue: "810027", rating: "81", location: "New York"},
			{id: 2, name: "Maryam Miller", wonDeal: "2019-08-13", topDealValue: "692455", rating: "69", location: "Ontario"},
			{id: 3, name: "Joseph Anderson", wonDeal: "2019-08-13", topDealValue: "552000", rating: "55", location: "Milan"},
			{id: 4, name: "Charlie Robinson", wonDeal: "2019-08-13", topDealValue: "492088", rating: "49", location: "Las Vegas"},
			{id: 5, name: "Liss Young", wonDeal: "2019-08-13", topDealValue: "392700", rating: "39", location: "San Francisco"},
			{id: 6, name: "Rick Scott", wonDeal: "2019-08-14", topDealValue: "510027", rating: "51", location: "New York"},
			{id: 7, name: "William Farrell", wonDeal: "2019-08-13", topDealValue: "492455", rating: "49", location: "Ontario"},
			{id: 8, name: "George Moore", wonDeal: "2019-08-13", topDealValue: "652000", rating: "65", location: "Milan"},
			{id: 9, name: "David Baker", wonDeal: "2019-08-13", topDealValue: "432088", rating: "43", location: "Las Vegas"},
			{id: 10, name: "Sophia Walker", wonDeal: "2019-08-13", topDealValue: "392700", rating: "39", location: "San Francisco"}
		]
	},
	{
		id: "3",
		period: "last 90 days",
		title: [
			{id: 1, name: "Samuel Jones", wonDeal: "2019-08-14", topDealValue: "510027", rating: "51", location: "New York"},
			{id: 2, name: "Maryam Miller", wonDeal: "2019-08-13", topDealValue: "392455", rating: "39", location: "Ontario"},
			{id: 3, name: "Joseph Anderson", wonDeal: "2019-08-13", topDealValue: "552000", rating: "55", location: "Milan"},
			{id: 4, name: "Charlie Robinson", wonDeal: "2019-08-13", topDealValue: "892088", rating: "89", location: "Las Vegas"},
			{id: 5, name: "Liss Young", wonDeal: "2019-08-13", topDealValue: "392700", rating: "39", location: "San Francisco"},
			{id: 6, name: "Rick Scott", wonDeal: "2019-08-14", topDealValue: "410027", rating: "41", location: "New York"},
			{id: 7, name: "William Farrell", wonDeal: "2019-08-13", topDealValue: "392455", rating: "39", location: "Ontario"},
			{id: 8, name: "George Moore", wonDeal: "2019-08-13", topDealValue: "852000", rating: "85", location: "Milan"},
			{id: 9, name: "David Baker", wonDeal: "2019-08-13", topDealValue: "492088", rating: "49", location: "Las Vegas"},
			{id: 10, name: "Sophia Walker", wonDeal: "2019-08-13", topDealValue: "692700", rating: "69", location: "San Francisco"}
		]
	}
];

const newData = data.map(item => ({
	id: item.id,
	period: item.period,
	title: item.title.filter(it => Number(it.topDealValue) > 500000)
}));

export const agentsTopFive = new webix.DataCollection({
	data: newData,
	scheme: {
		$init: (obj) => {
			obj.title.forEach((item) => {
				item.topDealValue = numberToStr(item.topDealValue);
			});
		}
	}
});
