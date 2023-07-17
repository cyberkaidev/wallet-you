import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		width: {
			max_width: string;
		};
		border_radius: {
			radius_5: string;
			radius_10: string;
			radius_15: string;
		};
		spaces: {
			space_5: string;
			space_10: string;
			space_15: string;
			space_20: string;
			space_25: string;
			space_30: string;
		};
		font_sizes: {
			XS: string;
			S: string;
			M: string;
			L: string;
			XL: string;
			XXL: string;
			XXXL: string;
		};
		colors: {
			white: string;
			green: string;
			red: string;
			light_cyan: string;
			dark_cyan: string;
			black_100: string;
			black_000: string;
			light_grey: string;
			dark_grey: string;
			black_100_50pct: string;
			transparent: string;
		};
	}
}
