const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

const data = [
	{id: 1, name: "Jerry Mattedi", wonDeal: "2019-08-14", topDealValue: "810027", rating: "5", location: "New York", deals: [{id: 1, name: "Open", value: 4, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 2, name: "Elianora Vasilov", wonDeal: "2019-08-13", topDealValue: "692455", rating: "4", location: "Ontario", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 2, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 3, name: "Marcos Anguilano", wonDeal: "2019-08-13", topDealValue: "552000", rating: "4", location: "Milan", deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 2, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 4, name: "Alvis Daen", wonDeal: "2019-08-13", topDealValue: "492088", rating: "3", location: "Las Vegas", deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 3, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 5, name: "Liss Shipsey", wonDeal: "2019-08-13", topDealValue: "392700", rating: "2", location: "San Francisco", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "#55CD97"}, {id: 3, name: "Lost", value: 2, color: "#FF5C4C"}]},
	{id: 6, name: "Rick Lopes", wonDeal: "2019-08-14", topDealValue: "510027", rating: "3", location: "New York", deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 7, name: "Martin Farrell", wonDeal: "2019-08-13", topDealValue: "492455", rating: "3", location: "Ontario", deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 1, color: "#FF5C4C"}]},
	{id: 8, name: "Douglass Moore", wonDeal: "2019-08-13", topDealValue: "652000", rating: "4", location: "Milan", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 3, color: "#FF5C4C"}]},
	{id: 9, name: "Eric Doe", wonDeal: "2019-08-13", topDealValue: "492088", rating: "3", location: "Las Vegas", deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]},
	{id: 10, name: "Sophi Elliman", wonDeal: "2019-08-13", topDealValue: "392700", rating: "2", location: "San Francisco", deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 3, color: "#FF5C4C"}]}
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

export const usersAgents = data.map((item) => {
	const obj = {
		id: item.id + 30,
		value: item.name,
		image: ""
	};
	return obj;
});
