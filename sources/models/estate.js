const numberToStr = webix.Number.numToStr({
	groupDelimiter: " ",
	groupSize: 3,
	decimalDelimiter: ".",
	decimalSize: 0
});

export const estateData = [
	{
		id: 1,
		dealId: "1",
		image: "1",
		price: "1000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Woodside, California, 94062 United States",
		lat: 42.42994,
		lng: -78.25386,
		label: "Green Gables",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 2,
		dealId: "1",
		image: "2",
		price: "1200000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Lilly Rd, Belmont, NY 14813, United States",
		lat: 42.279250,
		lng: -78.013763,
		label: "Stonewall Farm",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 3,
		dealId: "1",
		image: "3",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Paris, NY, United States",
		lat: 42.990496,
		lng: -75.223236,
		label: "Paris",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 4,
		dealId: "2",
		image: "4",
		price: "1000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Plimut, NY, United States",
		lat: 42.635889,
		lng: -75.651702,
		label: "Plimut",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 5,
		dealId: "3",
		image: "5",
		price: "1600000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Ockham, Massachusetts, United States",
		lat: 42.352364,
		lng: -72.081146,
		label: "Ockham",
		status: "favorite",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 6,
		dealId: "3",
		image: "6",
		price: "2000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "50 New England Ave, Summit, NJ 07901, United States",
		lat: 40.715945,
		lng: -74.366302,
		label: "50 New England Ave",
		status: "suggested",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 7,
		dealId: "3",
		image: "7",
		price: "2200000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "71 New England Ave Summit, NJ 07901, United States",
		lat: 40.718092,
		lng: -74.367514,
		label: "71 New England Ave Summit",
		status: "rejected",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 8,
		dealId: "4",
		image: "8",
		price: "2300000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Glen Hazel, Pittsburgh, PA, United States",
		lat: 40.407129,
		lng: -79.925384,
		label: "Glen Hazel",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 9,
		dealId: "4",
		image: "9",
		price: "1300000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Pennsoken Township, New Jersey, United States",
		lat: 39.970712,
		lng: -75.069427,
		label: "Pennsoken Township",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 10,
		dealId: "4",
		image: "10",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "98-2 Surrey St, Cambridge, MA 02138, United States",
		lat: 42.368601,
		lng: -71.114349,
		label: "98-2 Surrey St, Cambridge",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 11,
		dealId: "5",
		image: "11",
		price: "1000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "4300-4319 37th Rd N, Arlington, VA 22207, United States",
		lat: 38.918723,
		lng: -77.123870,
		label: "Arlington",
		status: "favorite",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 12,
		dealId: "5",
		image: "12",
		price: "1200000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "2365 E 57th St, Cleveland, OH 44104, United States",
		lat: 41.494086,
		lng: -81.650238,
		label: "Cleveland",
		status: "suggested",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 13,
		dealId: "5",
		image: "13",
		price: "1400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "1400-1480 Evans Pl, Scranton, PA 18504, United States",
		lat: 41.403504,
		lng: -75.695648,
		label: "Scranton",
		status: "rejected",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 14,
		dealId: "6",
		image: "14",
		price: "1600000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "42-80 Caldwell Dr, Ithaca, NY 14850, United States",
		lat: 42.449718,
		lng: -76.464691,
		label: "Ithaca",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 15,
		dealId: "7",
		image: "15",
		price: "2000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "1-129 Granby St, Manchester, NH 03102, United States",
		lat: 42.982459,
		lng: -71.487884,
		label: "Manchester",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 16,
		dealId: "8",
		image: "16",
		price: "1800000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "957-1023 Brentwood Rd NE, Washington, DC 20018, United States",
		lat: 38.918723,
		lng: -76.992034,
		label: "Brentwood",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 17,
		dealId: "9",
		image: "17",
		price: "1600000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Virginia, United States",
		lat: 37.529235,
		lng: -77.387542,
		label: "Virginia",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 18,
		dealId: "9",
		image: "18",
		price: "1400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Physical Education Ct, Albany, NY 12203, United States",
		lat: 42.684364,
		lng: -73.827972,
		label: "Physical Education",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 19,
		dealId: "9",
		image: "19",
		price: "2400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "100 St Barthelemy Rd, DuBois, PA 15801, United States",
		lat: 41.139272,
		lng: -78.716888,
		label: "Barthelemy",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 20,
		dealId: "10",
		image: "20",
		price: "1400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Pamelia, New York, United States",
		lat: 43.995011,
		lng: -75.882136,
		label: "Pamelia",
		status: "favorite",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 21,
		dealId: "10",
		image: "21",
		price: "1700000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "North Camden, Camden, NJ 08102, United States",
		lat: 39.945448,
		lng: -75.113372,
		label: "North Camden",
		status: "suggested",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 22,
		dealId: "10",
		image: "22",
		price: "1400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Maine Township, Pennsylvania, United States",
		lat: 41.006756,
		lng: -76.354827,
		label: "Maine Township",
		status: "rejected",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 23,
		dealId: "11",
		image: "23",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Ellicott, New York, United States",
		lat: 42.124620,
		lng: -79.277191,
		label: "Ellicott",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 24,
		dealId: "11",
		image: "24",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Koch Rd, Milford, PA 18337, United States",
		lat: 41.337546,
		lng: -74.816741,
		label: "Milford",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 25,
		dealId: "11",
		image: "25",
		price: "1800000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Upper Socon Township, Pennsylvania, United States",
		lat: 40.490733,
		lng: -75.410003,
		label: "Upper Socon Township",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 26,
		dealId: "12",
		image: "26",
		price: "1300000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Hopwell Township, Pennsylvania, United States",
		lat: 40.232225,
		lng: -80.338085,
		label: "Hopwell Township",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 27,
		dealId: "13",
		image: "27",
		price: "2000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Edgevale Dr, Erie, PA 16509, United States",
		lat: 42.082801,
		lng: -80.074413,
		label: "Edgevale",
		status: "favorite",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 28,
		dealId: "13",
		image: "28",
		price: "2000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Newfan, New York, United States",
		lat: 43.226061,
		lng: -78.668163,
		label: "Newfan",
		status: "suggested",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 29,
		dealId: "13",
		image: "29",
		price: "2100000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Haldimand, Ontario, Canada",
		lat: 42.937190,
		lng: -79.964550,
		label: "Haldimand",
		status: "rejected",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 30,
		dealId: "14",
		image: "30",
		price: "1900000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Linton Rd, Andover, OH 44003, United States",
		lat: 41.571143,
		lng: -80.667675,
		label: "Linton",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 31,
		dealId: "14",
		image: "1",
		price: "1000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Woodside, California, 94062 United States",
		lat: 42.42994,
		lng: -78.25386,
		label: "Green Gables",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 32,
		dealId: "14",
		image: "2",
		price: "1200000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Lilly Rd, Belmont, NY 14813, United States",
		lat: 42.279250,
		lng: -78.013763,
		label: "Stonewall Farm",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 33,
		dealId: "15",
		image: "3",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Paris, NY, United States",
		lat: 42.990496,
		lng: -75.223236,
		label: "Paris",
		status: "favorite",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 34,
		dealId: "15",
		image: "4",
		price: "1000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Plimut, NY, United States",
		lat: 42.635889,
		lng: -75.651702,
		label: "Plimut",
		status: "suggested",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 35,
		dealId: "15",
		image: "5",
		price: "1600000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Ockham, Massachusetts, United States",
		lat: 42.352364,
		lng: -72.081146,
		label: "Ockham",
		status: "rejected",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 36,
		dealId: "16",
		image: "6",
		price: "2000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "50 New England Ave, Summit, NJ 07901, United States",
		lat: 40.715945,
		lng: -74.366302,
		label: "50 New England Ave",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 37,
		dealId: "17",
		image: "7",
		price: "2200000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "71 New England Ave Summit, NJ 07901, United States",
		lat: 40.718092,
		lng: -74.367514,
		label: "71 New England Ave Summit",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 38,
		dealId: "17",
		image: "8",
		price: "2300000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Glen Hazel, Pittsburgh, PA, United States",
		lat: 40.407129,
		lng: -79.925384,
		label: "Glen Hazel",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 39,
		dealId: "17",
		image: "9",
		price: "1300000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Pennsoken Township, New Jersey, United States",
		lat: 39.970712,
		lng: -75.069427,
		label: "Pennsoken Township",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 40,
		dealId: "18",
		image: "10",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "98-2 Surrey St, Cambridge, MA 02138, United States",
		lat: 42.368601,
		lng: -71.114349,
		label: "98-2 Surrey St, Cambridge",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 41,
		dealId: "19",
		image: "11",
		price: "1000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "4300-4319 37th Rd N, Arlington, VA 22207, United States",
		lat: 38.918723,
		lng: -77.123870,
		label: "Arlington",
		status: "favotite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 42,
		dealId: "19",
		image: "12",
		price: "1200000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "2365 E 57th St, Cleveland, OH 44104, United States",
		lat: 41.494086,
		lng: -81.650238,
		label: "Cleveland",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 43,
		dealId: "19",
		image: "13",
		price: "1400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "1400-1480 Evans Pl, Scranton, PA 18504, United States",
		lat: 41.403504,
		lng: -75.695648,
		label: "Scranton",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 44,
		dealId: "20",
		image: "14",
		price: "1600000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "42-80 Caldwell Dr, Ithaca, NY 14850, United States",
		lat: 42.449718,
		lng: -76.464691,
		label: "Ithaca",
		status: "favorite",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 45,
		dealId: "20",
		image: "15",
		price: "2000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "1-129 Granby St, Manchester, NH 03102, United States",
		lat: 42.982459,
		lng: -71.487884,
		label: "Manchester",
		status: "suggested",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 46,
		dealId: "20",
		image: "16",
		price: "1800000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "957-1023 Brentwood Rd NE, Washington, DC 20018, United States",
		lat: 38.918723,
		lng: -76.992034,
		label: "Brentwood",
		status: "rejected",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 47,
		dealId: "21",
		image: "17",
		price: "1600000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Virginia, United States",
		lat: 37.529235,
		lng: -77.387542,
		label: "Virginia",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 48,
		dealId: "21",
		image: "18",
		price: "1400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Physical Education Ct, Albany, NY 12203, United States",
		lat: 42.684364,
		lng: -73.827972,
		label: "Physical Education",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 49,
		dealId: "21",
		image: "19",
		price: "2400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "100 St Barthelemy Rd, DuBois, PA 15801, United States",
		lat: 41.139272,
		lng: -78.716888,
		label: "Barthelemy",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 50,
		dealId: "22",
		image: "20",
		price: "1400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Pamelia, New York, United States",
		lat: 43.995011,
		lng: -75.882136,
		label: "Pamelia",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 51,
		dealId: "23",
		image: "21",
		price: "1700000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "North Camden, Camden, NJ 08102, United States",
		lat: 39.945448,
		lng: -75.113372,
		label: "North Camden",
		status: "favorite",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 52,
		dealId: "23",
		image: "22",
		price: "1400000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Maine Township, Pennsylvania, United States",
		lat: 41.006756,
		lng: -76.354827,
		label: "Maine Township",
		status: "suggested",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 53,
		dealId: "23",
		image: "23",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Ellicott, New York, United States",
		lat: 42.124620,
		lng: -79.277191,
		label: "Ellicott",
		status: "rejected",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 54,
		dealId: "24",
		image: "24",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Koch Rd, Milford, PA 18337, United States",
		lat: 41.337546,
		lng: -74.816741,
		label: "Milford",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 55,
		dealId: "24",
		image: "25",
		price: "1800000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Upper Socon Township, Pennsylvania, United States",
		lat: 40.490733,
		lng: -75.410003,
		label: "Upper Socon Township",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 56,
		dealId: "24",
		image: "26",
		price: "1300000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Hopwell Township, Pennsylvania, United States",
		lat: 40.232225,
		lng: -80.338085,
		label: "Hopwell Township",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 57,
		dealId: "25",
		image: "27",
		price: "2000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Edgevale Dr, Erie, PA 16509, United States",
		lat: 42.082801,
		lng: -80.074413,
		label: "Edgevale",
		status: "favorite",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 58,
		dealId: "25",
		image: "28",
		price: "2000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Newfan, New York, United States",
		lat: 43.226061,
		lng: -78.668163,
		label: "Newfan",
		status: "suggested",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 59,
		dealId: "25",
		image: "29",
		price: "2100000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Haldimand, Ontario, Canada",
		lat: 42.937190,
		lng: -79.964550,
		label: "Haldimand",
		status: "rejected",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 60,
		dealId: "26",
		image: "30",
		price: "1900000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Linton Rd, Andover, OH 44003, United States",
		lat: 41.571143,
		lng: -80.667675,
		label: "Linton",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 61,
		dealId: "27",
		image: "1",
		price: "1000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Woodside, California, 94062 United States",
		lat: 42.42994,
		lng: -78.25386,
		label: "Green Gables",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 62,
		dealId: "28",
		image: "2",
		price: "1200000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Lilly Rd, Belmont, NY 14813, United States",
		lat: 42.279250,
		lng: -78.013763,
		label: "Stonewall Farm",
		status: "favorite",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 63,
		dealId: "29",
		image: "3",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Paris, NY, United States",
		lat: 42.990496,
		lng: -75.223236,
		label: "Paris",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 64,
		dealId: "29",
		image: "4",
		price: "1000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Plimut, NY, United States",
		lat: 42.635889,
		lng: -75.651702,
		label: "Plimut",
		status: "suggested",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 65,
		dealId: "29",
		image: "5",
		price: "1600000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Ockham, Massachusetts, United States",
		lat: 42.352364,
		lng: -72.081146,
		label: "Ockham",
		status: "rejected",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 66,
		dealId: "30",
		image: "6",
		price: "2000000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "50 New England Ave, Summit, NJ 07901, United States",
		lat: 40.715945,
		lng: -74.366302,
		label: "50 New England Ave",
		status: "favorite",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 67,
		dealId: "30",
		image: "7",
		price: "2200000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "71 New England Ave Summit, NJ 07901, United States",
		lat: 40.718092,
		lng: -74.367514,
		label: "71 New England Ave Summit",
		status: "suggested",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 68,
		dealId: "30",
		image: "8",
		price: "2300000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Glen Hazel, Pittsburgh, PA, United States",
		lat: 40.407129,
		lng: -79.925384,
		label: "Glen Hazel",
		status: "rejected",
		categoryId: "3",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 69,
		dealId: "1",
		image: "9",
		price: "1300000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "Pennsoken Township, New Jersey, United States",
		lat: 39.970712,
		lng: -75.069427,
		label: "Pennsoken Township",
		status: "favorite",
		categoryId: "2",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	},
	{
		id: 70,
		dealId: "3",
		image: "10",
		price: "1500000",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		address: "98-2 Surrey St, Cambridge, MA 02138, United States",
		lat: 42.368601,
		lng: -71.114349,
		label: "98-2 Surrey St, Cambridge",
		status: "suggested",
		categoryId: "1",
		demand: [
			{id: 1, value: 120, year: 2017},
			{id: 2, value: 150, year: 2018},
			{id: 3, value: 190, year: 2019},
			{id: 4, value: 120, year: 2020}
		]
	}
];

estateData.forEach((item) => {
	item.demand.forEach((node) => {
		if (node.year === 2018) {
			node.color = "#7E57C2";
		}
		else if (node.year === 2019) {
			node.color = "#ff8839";
		}
		else {
			node.color = "#1CA1C1";
		}
	});
});

export const estate = new webix.DataCollection({
	data: estateData,
	scheme: {
		$init: (obj) => {
			obj.price = numberToStr(obj.price);
		}
	}
});
