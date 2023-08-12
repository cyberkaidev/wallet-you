/* eslint-disable no-undef */
module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			'module:metro-react-native-babel-preset',
			'babel-preset-expo',
			['@babel/preset-env', { targets: { node: 'current' } }],
			'@babel/preset-typescript',
		],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					root: ['.'],
					alias: {
						'@': './src',
					},
				},
			],
		],
	};
};
