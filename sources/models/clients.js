export const clients = new webix.DataCollection({
	data: [
		{id: 1, clientName: "Cyril Barone", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
		{id: 2, clientName: "Dottie Ward", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
		{id: 3, clientName: "Tommie Shurtleff", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
		{id: 4, clientName: "Jesse Holdman", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
		{id: 5, clientName: "Isaiah Greggs", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
		{id: 6, clientName: "Lacy Fordham", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
		{id: 7, clientName: "Camilla Mcculley", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
		{id: 8, clientName: "Gita Noda", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
		{id: 9, clientName: "Rolando Schulze", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
		{id: 10, clientName: "Abdul Abshire", email: "ghgh@gmail.com", phone: "+77777", source: "https://xbsoftware.com"}
	],
	scheme: {
		$init: (obj) => {
			obj.value = obj.clientName;
		}
	}
});
