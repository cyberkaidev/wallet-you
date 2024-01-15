import { UseAppSettingsProps } from './UseAppSettingsType';
import { UseBitcoinDataPricesProps } from './UseBitcoinDataPricesType';

export interface CurrenciesFormattedProps {
	data: UseBitcoinDataPricesProps['data'];
	currency: UseAppSettingsProps['currency'];
}
