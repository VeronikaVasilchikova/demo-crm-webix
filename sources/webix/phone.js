webix.protoUI({
	name: "phone",
	$init(config) {
		if (config.value) {
			webix.delay(() => this.setValue(config.value));
		}
	},
	getValue() {
		return this.config.value;
	},
	setValue(value) {
		this.setHTML(`<i class="fas fa-phone"></i><span> Phone: </span><a href="phoneto:${value}">${value}</a>`);
		this.config.value = value;
	}
}, webix.ui.template);
