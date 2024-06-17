export interface ResponseData {
	data: {
		market_data: {
			current_price: {
				aud: number;
				brl: number;
				cad: number;
				eur: number;
				gbp: number;
				usd: number;
			};
		};
	};
}

export type DataReturn = {
	date: Date;
	value: number;
}[];

export type GetBitcoinHistoricalPriceReturn = Promise<DataReturn>;
