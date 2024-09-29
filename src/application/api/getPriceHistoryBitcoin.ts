import { bitcoinRepository } from "~/data/repositories/bitcoinRepository";

type GetPriceHistoryBitcoin = Promise<
	{
		date: Date;
		value: number;
	}[]
>;

export async function getPriceHistoryBitcoin(): GetPriceHistoryBitcoin {
	const { body, statusCode } = await bitcoinRepository().getPriceHistory();

	if (!body || statusCode !== 200) throw new Error("failed request on getPriceHistory");

	return body.prices.slice(-20).map(item => ({
		date: new Date(item[0]),
		value: item[1],
	}));
}
