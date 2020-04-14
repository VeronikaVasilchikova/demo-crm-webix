import {JetView} from "webix-jet";
import PopupFormView from "../popupFormForDeals";
import {agents} from "../../models/agents";
import {deals} from "../../models/deals";
import {dealsProgress} from "../../models/dealsProgress";
import {statuses} from "../../models/statuses";
import {categories} from "../../models/categories";

export default class ListOfDealsView extends JetView {
	config() {
		return {
			view: "datatable",
            localId: "grid",
            css: "webix_data_border webix_header_border",
            scroll: "y",
            autoconfig: true,
            rowCss: "#css#",
            select: true,
            columns: [
                {
                    id: "clientName",
                    header: "Client Name",
                    fillspace: true
                },
                {
                    id: "dealCreated",
                    header: "Deal created",
                    sort: "date",
                    format: webix.i18n.longDateFormatStr,
                    adjust: true
                },
                {
                    id: "agentId",
                    header: ["Agent", {content: "selectFilter"}],
                    fillspace: true,
                    options: agents,
                    template: (obj) => {
                        return agents.getItem(obj.agentId).name;
                    }
                },
                {
                    id: "categoryId",
                    header: ["Category", {content: "selectFilter"}],
                    options: categories,
                    adjust: true
                },
                {
                    id: "lastActivity",
                    header: "Last activity",
                    format: webix.i18n.longDateFormatStr,
                    adjust: true
                },
                {
                    id: "nextActivity",
                    header: "Next activity",
                    format: webix.i18n.longDateFormatStr,
                    adjust: true
                },
                {
                    id: "dealProgressId",
                    header: "Deal progress",
                    options: dealsProgress,
                    adjust: true,
                    template: (obj) => {
                        if (obj.dealProgressId) {
                            return dealsProgress.getItem(obj.dealProgressId).transactionStage;
                        }
                        else {
                            return "";
                        }
                    }
                },
                {
                    id: "statusId",
                    header: ["Status", {content: "selectFilter"}],
                    options: statuses,
                    adjust: true
                },
                {
                    header: ["", ""],
                    template: "<span class='myicon'></span>",
                    adjust: true
                },
            ],
            onClick: {
                myicon: (e, id) => {
                    this.editItem(id.row);
                }
            }
		};
	}

	init() {
        this.$$("grid").parse(deals);
        this._jetPopupForm = this.ui(PopupFormView);
    }
    
    editItem(id) {
		if (id) {
			this._jetPopupForm.showPopupForm(id);
		}
	}
}
