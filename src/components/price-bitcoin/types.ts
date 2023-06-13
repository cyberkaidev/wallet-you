export interface PriceBitcoinProps {
	title: string;
	price: string;
	porcent: string;
	isPositive: boolean;
	bitcoin: string;
	status: 'loading' | 'success' | 'failed' | null;
}
