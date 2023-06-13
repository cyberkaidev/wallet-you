import { CalculateBalanceProps } from './types';

export function calculateBalance({ balance, currentPrice }: CalculateBalanceProps) {
	return Number(balance) * (currentPrice ?? 0);
}
