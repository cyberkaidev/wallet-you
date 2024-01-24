export interface ChartMainProps {
	data: {
		date: Date;
		value: number;
	}[];
}

export interface CustomLineProps {
	line?: string;
	isActive: boolean;
}

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
