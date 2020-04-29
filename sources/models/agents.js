const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

const data = [
	{id: 1, name: "Samuel Jones", image: "1", wonDeal: "2019-08-14", topDealValue: "810027", rating: "5", location: "New York", deals: [{id: 1, name: "Open", value: 4, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 2, name: "Maryam Miller", image: "2", wonDeal: "2019-08-13", topDealValue: "692455", rating: "4", location: "Ontario", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 2, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 3, name: "Joseph Anderson", image: "3", wonDeal: "2019-08-13", topDealValue: "552000", rating: "4", location: "Milan", deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 2, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 4, name: "Charlie Robinson", image: "4", wonDeal: "2019-08-13", topDealValue: "492088", rating: "3", location: "Las Vegas", deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 3, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 5, name: "Liss Young", image: "5", wonDeal: "2019-08-13", topDealValue: "392700", rating: "2", location: "San Francisco", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "#55CD97"}, {id: 3, name: "Lost", value: 2, color: "#FF5C4C"}]},
	{id: 6, name: "Rick Scott", image: "6", wonDeal: "2019-08-14", topDealValue: "510027", rating: "3", location: "New York", deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 7, name: "William Farrell", image: "7", wonDeal: "2019-08-13", topDealValue: "492455", rating: "3", location: "Ontario", deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 1, color: "#FF5C4C"}]},
	{id: 8, name: "George Moore", image: "8", wonDeal: "2019-08-13", topDealValue: "652000", rating: "4", location: "Milan", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 3, color: "#FF5C4C"}]},
	{id: 9, name: "David Baker", image: "9", wonDeal: "2019-08-13", topDealValue: "492088", rating: "3", location: "Las Vegas", deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 10, name: "Sophia Walker", image: "10", wonDeal: "2019-08-13", topDealValue: "392700", rating: "2", location: "San Francisco", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 3, color: "#FF5C4C"}]}
];

export const agents = new webix.DataCollection({
	data,
	scheme: {
		$init: (obj) => {
			obj.value = obj.name;
			obj.topDealValue = numberToStr(obj.topDealValue);
		}
	}
});

export const usersAgents = data.map((item) => {
	const obj = {
		id: item.id + 30,
		value: item.name,
		image: `../../data/agents_images/${item.id}.png`
	};
	return obj;
});
