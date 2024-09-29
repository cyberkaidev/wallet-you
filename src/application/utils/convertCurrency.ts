import { useFormatCurrency } from "../hooks/useFormatCurrency";

type Props = {
	balance: string;
	cryptoCurrentPrice?: number;
};

export function cryptoToCurrency({ balance, cryptoCurrentPrice }: Props) {
	const curreny = Number(balance) * (cryptoCurrentPrice ?? 0);
	return useFormatCurrency(curreny);
}
