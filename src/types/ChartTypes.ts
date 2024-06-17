export interface LinePathProps {
	line?: string;
}

export interface ChartProps {
	price?: number;
	priceStatus: 'loading' | 'success' | 'failed';
}
