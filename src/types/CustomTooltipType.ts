export interface CustomTooltipProps {
	x?: (arg?: number) => number;
	y?: (arg: number) => number;
	positionX: number;
	size: React.MutableRefObject<number>;
	dataList: {
		date: Date;
		value: number;
	}[];
}
