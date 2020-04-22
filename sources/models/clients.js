const data = [
	{id: 1, clientName: "Cyril Barone", email: "CyrilBarone@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 2, clientName: "Dottie Ward", email: "DottieWard@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 3, clientName: "Tommie Shurtleff", email: "TommieShurtleff@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 4, clientName: "Jesse Holdman", email: "JesseHoldman@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 5, clientName: "Isaiah Greggs", email: "IsaiahGreggs@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 6, clientName: "Lacy Fordham", email: "LacyFordham@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 7, clientName: "Camilla Mcculley", email: "CamillaMcculley@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 8, clientName: "Gita Noda", email: "GitaNoda@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 9, clientName: "Rolando Schulze", email: "RolandoSchulze@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 10, clientName: "Abdul Abshire", email: "AbdulAbshire@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 11, clientName: "Toshia Lininger", email: "ToshiaLininger@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 12, clientName: "Lasonya Capozzi", email: "LasonyaCapozzi@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 13, clientName: "Emelda Araiza", email: "EmeldaAraiza@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 14, clientName: "Jeanelle Waggoner", email: "JeanelleWaggoner@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 15, clientName: "Paola Poteat", email: "PaolaPoteat@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 16, clientName: "Marcia Dicarlo", email: "MarciaDicarlo@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 17, clientName: "Alison Vogt", email: "AlisonVogt@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 18, clientName: "Micaela Pedretti", email: "MicaelaPedretti@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 19, clientName: "Jeannette Mcdonnell", email: "JeannetteMcdonnell@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 20, clientName: "Lawanna Dunmore", email: "LawannaDunmore@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 21, clientName: "Samantha Stucker", email: "SamanthaStucker@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 22, clientName: "Tyree Harrold", email: "TyreeHarrold@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 23, clientName: "Brianna Augsburger", email: "BriannaAugsburger@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 24, clientName: "Ali Crawley", email: "AliCrawley@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 25, clientName: "Omega Rasnake", email: "OmegaRasnake@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 26, clientName: "Bertha Hotaling", email: "BerthaHotaling@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 27, clientName: "Elenore Sandman", email: "ElenoreSandman@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 28, clientName: "Estrella Bring", email: "EstrellaBring@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 29, clientName: "Heike Cunningham", email: "HeikeCunningham@gmail.com", phone: "+77777", source: "https://xbsoftware.com"},
	{id: 30, clientName: "Shelly Beagle", email: "ShellyBeagle@gmail.com", phone: "+77777", source: "https://xbsoftware.com"}
];

export const clients = new webix.DataCollection({
	data,
	scheme: {
		$init: (obj) => {
			obj.value = obj.clientName;
		}
	}
});

export const usersClients = data.map((item) => {
	const obj = {
		id: item.id,
		value: item.clientName
	};
	return obj;
});
