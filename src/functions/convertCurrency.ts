import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { CryptoToCurrencyProps } from '@/types/CryptoToCurrencyType';

export function cryptoToCurrency({ balance, cryptoCurrentPrice }: CryptoToCurrencyProps) {
	const curreny = Number(balance) * (cryptoCurrentPrice ?? 0);
	return useFormatCurrency(curreny);
}
