import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
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
			purple_100: string;
			purple_200: string;
			purple_300: string;
			black_300: string;
			black_200: string;
			grey_300: string;
			grey_200: string;
			black_300_30pct: string;
		};
	}
}
