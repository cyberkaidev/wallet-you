import { SchemeTextProps } from '@/types/SchemeTextType';

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
			case 'xs':
				return '2.5%';
			case 's':
				if (isTablet) return '2.5%';
				return '3%';
			case 'm':
				if (isTablet) return '3%';
				return '3.4%';
			case 'l':
				if (isTablet) return '3.4%';
				return '4.5%';
			case 'xl':
				if (isTablet) return '4.5%';
				return '5.5%';
			case 'xxl':
				if (isTablet) return '5.5%';
				return '6.5%';
			case 'xxxl':
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
