import { SchemeTextProps } from './types';

export function schemeText({ weight, size, isTablet }: SchemeTextProps) {
	function onFontFamily() {
		switch (weight) {
			case 'regular':
				return 'Inter-Regular';
			case 'medium':
				return 'Inter-Medium';
			case 'bold':
				return 'Inter-Bold';
			default:
				return 'Inter-Regular';
		}
	}

	function onFontSize() {
		switch (size) {
			case 'XS':
				return '2.5%';
			case 'S':
				if (isTablet) return '2.5%';
				return '3%';
			case 'M':
				if (isTablet) return '3%';
				return '3.4%';
			case 'L':
				if (isTablet) return '3.4%';
				return '4.5%';
			case 'XL':
				if (isTablet) return '4.5%';
				return '5.5%';
			case 'XXL':
				if (isTablet) return '5.5%';
				return '6.5%';
			case 'XXXL':
				if (isTablet) return '6.5%';
				return '10%';
			default:
				if (isTablet) return '3%';
				return '3.4%';
		}
	}

	return {
		onFontFamily,
		onFontSize,
	};
}
