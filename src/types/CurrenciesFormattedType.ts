import { UseAppSettingsProps } from '@/stores/use-app-settings/types';
import { UseBitcoinDataPricesProps } from '@/stores/use-bitcoin-data-prices/types';

export interface CurrenciesFormattedProps {
	data: UseBitcoinDataPricesProps['data'];
	currency: UseAppSettingsProps['currency'];
}
