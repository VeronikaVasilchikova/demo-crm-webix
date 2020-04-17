const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

const data = [
	{id: 1, name: "Jerry Mattedi", wonDeal: "2019-08-14", topDealValue: "810027", location: "New York", deals: [{id: 1, name: "Open", value: 4, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "green"}, {id: 3, name: "Lost", value: 0, color: "red"}]},
	{id: 2, name: "Elianora Vasilov", wonDeal: "2019-08-13", topDealValue: "692455", location: "Ontario", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 2, color: "green"}, {id: 3, name: "Lost", value: 0, color: "red"}]},
	{id: 3, name: "Marcos Anguilano", wonDeal: "2019-08-13", topDealValue: "552000", location: "Milan", deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 2, color: "green"}, {id: 3, name: "Lost", value: 0, color: "red"}]},
	{id: 4, name: "Alvis Daen", wonDeal: "2019-08-13", topDealValue: "492088", location: "Las Vegas", deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 3, color: "green"}, {id: 3, name: "Lost", value: 0, color: "red"}]},
	{id: 5, name: "Liss Shipsey", wonDeal: "2019-08-13", topDealValue: "392700", location: "San Francisco", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "green"}, {id: 3, name: "Lost", value: 2, color: "red"}]},
	{id: 6, name: "Rick Lopes", wonDeal: "2019-08-14", topDealValue: "410027", location: "New York", deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "green"}, {id: 3, name: "Lost", value: 0, color: "red"}]},
	{id: 7, name: "Martin Farrell", wonDeal: "2019-08-13", topDealValue: "492455", location: "Ontario", deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "green"}, {id: 3, name: "Lost", value: 1, color: "red"}]},
	{id: 8, name: "Douglass Moore", wonDeal: "2019-08-13", topDealValue: "652000", location: "Milan", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "green"}, {id: 3, name: "Lost", value: 3, color: "red"}]},
	{id: 9, name: "Eric Doe", wonDeal: "2019-08-13", topDealValue: "492088", location: "Las Vegas", deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "green"}, {id: 3, name: "Lost", value: 0, color: "red"}]},
	{id: 10, name: "Sophi Elliman", wonDeal: "2019-08-13", topDealValue: "392700", location: "San Francisco", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "green"}, {id: 3, name: "Lost", value: 3, color: "red"}]}
];

export const agentsTopFive = new webix.DataCollection({
	data: data.filter(item => Number(item.topDealValue) > 500000),
	scheme: {
		$init: (obj) => {
			obj.topDealValue = numberToStr(obj.topDealValue);
		}
	}
});

export const agents = new webix.DataCollection({
	data,
	scheme: {
		$init: (obj) => {
			obj.value = obj.name;
		}
	}
});
