const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

const data = [
	{"id": 1,"name": "Jerry Mattedi","wonDeal": "2019-08-14","topDealValue": "810027","location": "New York"},
	{"id": 2,"name": "Elianora Vasilov","wonDeal": "2019-08-13","topDealValue": "692455","location": "Ontario"},
	{"id": 3,"name": "Marcos Anguilano","wonDeal": "2019-08-13","topDealValue": "552000","location": "Milan"},
	{"id": 4,"name": "Alvis Daen","wonDeal": "2019-08-13","topDealValue": "492088","location": "Las Vegas"},
	{"id": 5,"name": "Liss Shipsey","wonDeal": "2019-08-13","topDealValue": "392700","location": "San Francisco"},
	{"id": 6,"name": "Rick Lopes","wonDeal": "2019-08-14","topDealValue": "410027","location": "New York"},
	{"id": 7,"name": "Martin Farrell","wonDeal": "2019-08-13","topDealValue": "492455","location": "Ontario"},
	{"id": 8,"name": "Douglass Moore","wonDeal": "2019-08-13","topDealValue": "652000","location": "Milan"},
	{"id": 9,"name": "Eric Doe","wonDeal": "2019-08-13","topDealValue": "492088","location": "Las Vegas"},
	{"id": 10,"name": "Sophi Elliman","wonDeal": "2019-08-13","topDealValue": "392700","location": "San Francisco"}
];

export const agentsTopFive = new webix.DataCollection({
	data: data.filter(item => {
		return Number(item.topDealValue) > 500000;
	}),
	scheme: {
		$init: (obj) => {
			obj.topDealValue = numberToStr(obj.topDealValue);
		}
	}
});

export const agents = new webix.DataCollection({
	data: data,
	scheme: {
		$init: (obj) => {
			obj.value = obj.name;
		}
	}
});
