module.exports = function (context, options) {
	return {
		name: 'es-text-loader',
		configureWebpack() {
			return {
				module: {
					rules: [
						{
							test: /\.txt$/i,
							use: 'raw-loader',
						},
					],
				},
			};
		},
	};
};
