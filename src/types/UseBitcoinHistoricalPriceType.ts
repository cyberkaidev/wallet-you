interface DataProps {
	data: {
		date: Date;
		value: number;
	}[];
	status: "loading" | "success" | "failed" | null;
}

export interface UseBitcoinHistoricalPriceProps extends DataProps {
	fetchBitcoinHistoricalPrice: () => Promise<void>;
}
