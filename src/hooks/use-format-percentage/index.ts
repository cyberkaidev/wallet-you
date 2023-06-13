export function useFormatPercentage(value: number) {
	const prefix = value < 0 ? '' : '+ ';
	return {
		percent: `${prefix}${value.toFixed(2)}%`,
		isPositive: value > 0,
	};
}
