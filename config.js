module.exports = function(config) {
	return config.loadConfig({
		refresh_rate: {
			doc: 'Amount of time in ms between each query',
			format: 'nat',
			default: 120000,
			env: 'SUPINBOT_HN_INTERVAL'
		},
		channel: {
			doc: 'The name or channel ID to posts news to',
			format: String,
			default: '#news',
                        env: 'SUPINBOT_HN_CHANNEL'
		}
	});
};
