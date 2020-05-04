webix.protoUI({
	name: "email",
	$init(config) {
		if (config.value) {
			webix.delay(() => this.setValue(config.value));
		}
	},
	getValue() {
		return this.config.value;
	},
	setValue(value) {
		this.setHTML(`<i class="fas fa-envelope"></i><span> Email: </span><a href="mailto:${value}">${value}</a>`);
		this.config.value = value;
	}
}, webix.ui.template);
