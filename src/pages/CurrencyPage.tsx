import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderSwiperOptions } from '@/components/HeaderSwiperOptions';
import { ScrollView } from '@/components/ScrollView';
import { SelectList } from '@/components/SelectList';
import { useAppSettings } from '@/stores/useAppSettings';
import { UseAppSettingsProps } from '@/types/UseAppSettingsType';

export function CurrencyPage() {
	const { t } = useTranslation();
	const { currency, setCurrency } = useAppSettings(state => state);
	const [selected, setSelected] = React.useState(currency);

	const currenciesTypes = [
		{ title: 'AUD', ref: 'aud' },
		{ title: 'BRL', ref: 'brl' },
		{ title: 'CAD', ref: 'cad' },
		{ title: 'EUR', ref: 'eur' },
		{ title: 'GBP', ref: 'gbp' },
		{ title: 'USD', ref: 'usd' },
	];

	return (
		<React.Fragment>
			<HeaderSwiperOptions
				title={t('currency')}
				onAction={() => setCurrency(selected)}
				disableAction={selected === currency}
			/>
			<ScrollView>
				<SelectList
					data={currenciesTypes}
					selected={selected}
					onSelected={arg => setSelected(arg as UseAppSettingsProps['currency'])}
				/>
			</ScrollView>
		</React.Fragment>
	);
}
