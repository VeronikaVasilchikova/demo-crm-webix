export const sources = new webix.DataCollection({
	data: [
		{
			id: "1",
			period: "last week",
			title: [
				{id: 1, source: "Website", value: "90", color: "#8664C6"},
				{id: 2, source: "Referrals", value: "7", color: "#1CA1C1"},
				{id: 3, source: "Ad", value: "3", color: "#F8643F"}
			]
		},
		{
			id: "2",
			period: "last month",
			title: [
				{id: 1, source: "Website", value: "80", color: "#8664C6"},
				{id: 2, source: "Referrals", value: "5", color: "#1CA1C1"},
				{id: 3, source: "Ad", value: "15", color: "#F8643F"}
			]
		},
		{
			id: "3",
			period: "last 90 days",
			title: [
				{id: 1, source: "Website", value: "65", color: "#8664C6"},
				{id: 2, source: "Referrals", value: "20", color: "#1CA1C1"},
				{id: 3, source: "Ad", value: "15", color: "#F8643F"}
			]
		}
	]
});
