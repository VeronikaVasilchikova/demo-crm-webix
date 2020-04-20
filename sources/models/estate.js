const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

export const estate = new webix.DataCollection({
	data: [
		{id: 1, dealId: "1", image: "", price: "100000", description: "Some description", address: "Some address", status: "favorite"},
		{id: 2, dealId: "2", image: "", price: "120000", description: "Some description", address: "Some address", status: "favorite"},
		{id: 3, dealId: "4", image: "", price: "130000", description: "Some description", address: "Some address", status: "favorite"},
		{id: 4, dealId: "2", image: "", price: "150000", description: "Some description", address: "Some address", status: "suggested"},
		{id: 5, dealId: "2", image: "", price: "90000", description: "Some description", address: "Some address", status: "rejected"},
		{id: 6, dealId: "4", image: "", price: "90000", description: "Some description", address: "Some address", status: "suggested"},
		{id: 7, dealId: "1", image: "", price: "110000", description: "Some description", address: "Some address", status: "suggested"},
		{id: 8, dealId: "4", image: "", price: "100000", description: "Some description", address: "Some address", status: "rejected"},
		{id: 9, dealId: "2", image: "", price: "95000", description: "Some description", address: "Some address", status: "favorite"},
		{id: 10, dealId: "1", image: "", price: "80000", description: "Some description", address: "Some address", status: "rejected"},
		{id: 11, dealId: "2", image: "", price: "100000", description: "Some description", address: "Some address", status: "suggested"},
		{id: 12, dealId: "4", image: "", price: "110000", description: "Some description", address: "Some address", status: "suggested"},
		{id: 13, dealId: "2", image: "", price: "90000", description: "Some description", address: "Some address", status: "rejected"}
	],
	scheme: {
		$init: (obj) => {
			obj.price = numberToStr(obj.price);
		}
	}
});
