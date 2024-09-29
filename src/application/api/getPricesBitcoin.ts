import { bitcoinRepository } from "~/data/repositories/bitcoinRepository";

export async function getPricesBitcoin() {
	const { body, statusCode } = await bitcoinRepository().getPrices();

	return {
		body: body?.market_data.current_price,
		statusCode,
	};
}
