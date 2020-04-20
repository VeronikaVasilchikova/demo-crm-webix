import {JetView} from "webix-jet";

export default class AgentsGoogleMapView extends JetView {
	config() {
		return {
			key: "AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",
			view: "google-map",
			id: "map",
			zoom: 6,
			center: [48.724, 8.215],
			data: [
				{id: 1, lat: 48.782, lng: 9.177, title: "Stuttgart"},
				{id: 2, lat: 47.366, lng: 8.55, title: "Zurich"},
				{id: 3, lat: 48.137, lng: 11.575, title: "Munich"}
			]
		};
	}
}
