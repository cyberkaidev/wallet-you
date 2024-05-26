export interface PriceBitcoinProps {
	title: string;
	price: string;
	bitcoin: string;
	status: 'loading' | 'success' | 'failed' | null;
}
