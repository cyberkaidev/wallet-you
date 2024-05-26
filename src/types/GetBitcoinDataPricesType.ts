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
			high_24h: {
				aud: number;
				brl: number;
				cad: number;
				eur: number;
				gbp: number;
				usd: number;
			};
			low_24h: {
				aud: number;
				brl: number;
				cad: number;
				eur: number;
				gbp: number;
				usd: number;
			};
			price_change_24h_in_currency: {
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
