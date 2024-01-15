export interface CryptoCardLargeProps {
	type: 'bitcoin' | 'cardano';
	price: string;
	balance: string;
	status: 'loading' | 'success' | 'failed' | null;
}
