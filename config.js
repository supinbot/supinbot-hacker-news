module.exports = function(config) {
	return config.loadConfig('hacker-news.json', {
		refresh_rate: {
			doc: 'Amount of time in ms between each query',
			format: 'nat',
			default: 120000
		},
		channel: {
			doc: 'The name or channel ID to posts news to',
			format: String,
			default: '#news'
		}
	});
};
