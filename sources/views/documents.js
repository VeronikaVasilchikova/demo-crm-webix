import {JetView} from "webix-jet";
import {documents} from "../models/documents";
import {deals} from "../models/deals";

export default class DocumentsView extends JetView {
	config() {
		return {
			rows: [
				{
					view: "datatable",
					localId: "datatableDoc",
					type: "uploader",
					scroll: "y",
					css: "webix_data_border webix_header_border",
					columns: [
						{
							id: "name",
							header: "Name",
							fillspace: true,
							sort: "text"
						},
						{
							id: "changeDate",
							header: "Change Date",
							fillspace: true,
							sort: "date",
							format: webix.i18n.longDateFormatStr
						},
						{
							id: "sizetext",
							header: "Size",
							fillspace: true,
							sort: (a, b) => parseInt(a.sizetext) - parseInt(b.sizetext)
						},
						{
							header: "",
							template: "{common.trashIcon()}",
							adjust: true
						}
					],
					onClick: {
						"wxi-trash": (e, id) => this.removeDoc(id)
					}
				},
				{
					view: "uploader",
					localId: "uploader",
					autosend: false,
					upload: "",
					type: "icon",
					icon: "fas fa-cloud-upload-alt",
					label: "Upload file",
					inputWidth: 300,
					align: "center",
					on: {
						onBeforeFileAdd: obj => this.beforeFileAdd(obj),
						onFileUploadError: () => {
							webix.alert("Error during file upload");
						}
					}
				}
			]
		};
	}

	init() {
		this.$$("datatableDoc").sync(documents);
		const id = this.getParam("id", true);
		this.$$("datatableDoc").sync(documents, () => {
			this.$$("datatableDoc").filter(item => item.dealId.toString() === id.toString());
		});
	}

	removeDoc(id) {
		webix.confirm({
			title: "Remove this note",
			ok: "Yes",
			cancel: "No",
			text: "Are you sure you want to remove this note?"
		}).then(() => webix.confirm({
			title: "Warning!",
			type: "confirm-warning",
			text: "You are about to agree. Are you sure?"
		})).then(() => {
			documents.remove(id);
		});
		return false;
	}

	beforeFileAdd(obj) {
		const id = this.getParam("id", true);
		const strToDate = webix.Date.strToDate("%Y-%m-%d");
		if (id && deals.exists(id)) {
			const sendFile = {
				dealID: this.getParam("id", true),
				name: obj.name,
				changeDate: strToDate(obj.file.lastModifiedDate),
				sizetext: obj.sizetext
			};
			documents.add(sendFile);
		}
	}
}
