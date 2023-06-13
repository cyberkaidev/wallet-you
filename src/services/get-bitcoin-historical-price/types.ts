export interface ResponseData {
	data: {
		prices: [number, number][];
	};
}

export type DataReturn = {
	date: Date;
	value: number;
}[];

export type GetBitcoinHistoricalPriceReturn = Promise<DataReturn>;
