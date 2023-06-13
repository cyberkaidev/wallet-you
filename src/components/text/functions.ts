import { SchemeTextProps } from './types';

export function schemeText({ weight, size }: SchemeTextProps) {
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
				return '3%';
			case 'M':
				return '3.4%';
			case 'L':
				return '4.5%';
			case 'XL':
				return '5.5%';
			case 'XXL':
				return '6.5%';
			case 'XXXL':
				return '10%';
			default:
				return '3.4%';
		}
	}

	return {
		onFontFamily,
		onFontSize,
	};
}
