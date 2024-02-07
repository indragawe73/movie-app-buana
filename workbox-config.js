module.exports = {
	globDirectory: 'public/',
	globPatterns: ['**/*.{html,js,css,png,jpg,json}'],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};