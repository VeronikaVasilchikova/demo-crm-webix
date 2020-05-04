const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

const data = [
	{
		id: 1,
		name: "Samuel Jones",
		phone: "+11111",
		email: "SamuelJones@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "1",
		wonDeal: "2019-08-14",
		topDealValue: "810027",
		rating: "5",
		location: "New York",
		deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 2, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]
	},
	{
		id: 2,
		name: "Maryam Miller",
		phone: "+22222",
		email: "MaryamMiller@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "2",
		wonDeal: "2019-08-13",
		topDealValue: "692455",
		rating: "4",
		location: "Ontario",
		deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 2, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]
	},
	{
		id: 3,
		name: "Joseph Anderson",
		phone: "+33333",
		email: "JosephAnderson@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "3",
		wonDeal: "2019-08-13",
		topDealValue: "552000",
		rating: "4",
		location: "Milan",
		deals: [{id: 1, name: "Open", value: 2, color: "yellow"}, {id: 2, name: "Won", value: 2, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]
	},
	{
		id: 4,
		name: "Charlie Robinson",
		phone: "+44444",
		email: "CharlieRobinson@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "4",
		wonDeal: "2019-08-13",
		topDealValue: "492088",
		rating: "3",
		location: "Las Vegas",
		deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 3, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]
	},
	{
		id: 5,
		name: "Liss Young",
		phone: "+55555",
		email: "LissYoung@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "5",
		wonDeal: "2019-08-13",
		topDealValue: "392700",
		rating: "2",
		location: "San Francisco",
		deals: [{id: 1, name: "Open", value: 0, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "#55CD97"}, {id: 3, name: "Lost", value: 2, color: "#FF5C4C"}]
	},
	{
		id: 6,
		name: "Rick Scott",
		phone: "+66666",
		email: "RickScott@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "6",
		wonDeal: "2019-08-14",
		topDealValue: "510027",
		rating: "3",
		location: "New York",
		deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "#55CD97"}, {id: 3, name: "Lost", value: 1, color: "#FF5C4C"}]
	},
	{
		id: 7,
		name: "William Farrell",
		phone: "+77777",
		email: "WilliamFarrell@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "7",
		wonDeal: "2019-08-13",
		topDealValue: "492455",
		rating: "3",
		location: "Ontario",
		deals: [{id: 1, name: "Open", value: 3, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]
	},
	{
		id: 8,
		name: "George Moore",
		phone: "+88888",
		email: "GeorgeMoore@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "8",
		wonDeal: "2019-08-13",
		topDealValue: "652000",
		rating: "4",
		location: "Milan",
		deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 1, color: "#FF5C4C"}]
	},
	{
		id: 9,
		name: "David Baker",
		phone: "+99999",
		email: "DavidBaker@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "9",
		wonDeal: "2019-08-13",
		topDealValue: "492088",
		rating: "3",
		location: "Las Vegas",
		deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 0, color: "#55CD97"}, {id: 3, name: "Lost", value: 0, color: "#FF5C4C"}]
	},
	{
		id: 10,
		name: "Sophia Walker",
		phone: "+10101",
		email: "SophiaWalker@gmail.com",
		linkedin: "https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
		instagram: "https://www.instagram.com/xbsoftware/",
		youtube: "https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
		facebook: "https://www.facebook.com/webixui/",
		twitter: "https://twitter.com/webixui?lang=en",
		vk: "https://vk.com/webixui",
		image: "10",
		wonDeal: "2019-08-13",
		topDealValue: "392700",
		rating: "2",
		location: "San Francisco",
		deals: [{id: 1, name: "Open", value: 1, color: "yellow"}, {id: 2, name: "Won", value: 1, color: "#55CD97"}, {id: 3, name: "Lost", value: 1, color: "#FF5C4C"}]
	}
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
