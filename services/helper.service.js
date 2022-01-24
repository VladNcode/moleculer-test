module.exports = {
	name: "helper",

	actions: {
		random() {
			return Math.round(Math.random() * 1000);
		},

		add(ctx) {
			this.broker.logger.info("hello it works");
			return Number(ctx.params.a) + Number(ctx.params.b);
		},
		sub(ctx) {
			return Number(ctx.params.a) - Number(ctx.params.b);
		},
	},

	events: {
		"hello.called"(payload) {
			this.logger.info("Helpler sevice caught an event");
			this.logger.info(payload);
			this.add(payload);
		},
	},
};
