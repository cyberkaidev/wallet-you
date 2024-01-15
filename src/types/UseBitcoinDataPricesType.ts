import { ResponseData } from './GetBitcoinDataPricesType';

export interface DataProps {
	data: ResponseData['data']['market_data'] | null;
	status: 'loading' | 'success' | 'failed' | null;
}

export interface UseBitcoinDataPricesProps extends DataProps {
	fetchBitcoinDataPrices: () => Promise<void>;
}
