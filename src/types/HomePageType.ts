export interface MyBitcoinPriceProps {
	price: string;
	balance: string;
	status: 'loading' | 'success' | 'failed' | null;
}
