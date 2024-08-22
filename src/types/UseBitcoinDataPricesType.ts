import { ResponseData } from "./GetBitcoinDataPricesType";

export interface DataProps {
	currentPrice: ResponseData["data"]["market_data"]["current_price"] | null;
	status: "loading" | "success" | "failed" | null;
}

export interface UseBitcoinDataPricesProps extends DataProps {
	fetchBitcoinDataPrices: () => Promise<void>;
}
