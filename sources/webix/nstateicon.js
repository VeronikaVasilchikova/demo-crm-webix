webix.protoUI({
	name: "nstateicon",
	$cssName: "icon",
	id: "nstateicon",
	$init(config) {
		let state = config.state || 0;
		config.state = state;
		if (config.icons) {
			config.icon = config.icons[state];
		}
		this.attachEvent("onItemClick", () => {
			state = this.config.state;
			state++;
			if (config.icons && state >= config.icons.length) {
				state = 0;
			}
			this.config.state = state;

			if (config.icons) {
				this.config.icon = config.icons[state];
			}

			this.refresh();

			this.callEvent("onStateChange", [state]);
		});
	}
}, webix.ui.icon);
