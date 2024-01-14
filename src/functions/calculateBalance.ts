import { CalculateBalanceProps } from '@/types/CalculateBalanceType';

export function calculateBalance({ balance, currentPrice }: CalculateBalanceProps) {
	return Number(balance) * (currentPrice ?? 0);
}
