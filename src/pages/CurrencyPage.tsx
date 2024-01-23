import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderSwiperOptions } from '@/components/HeaderSwiperOptions';
import { ScrollView } from '@/components/ScrollView';
import { SelectList } from '@/components/SelectList';
import { useAppSettings } from '@/stores/useAppSettings';
import { CurrenciesTypes } from '@/types/CurrencyPageType';

export function CurrencyPage() {
	const { t } = useTranslation();
	const { currency, setCurrency } = useAppSettings(state => state);
	const [selected, setSelected] = React.useState(currency);

	const currenciesTypes: CurrenciesTypes[] = [
		{ title: 'AUD', key: 'aud' },
		{ title: 'BRL', key: 'brl' },
		{ title: 'CAD', key: 'cad' },
		{ title: 'EUR', key: 'eur' },
		{ title: 'GBP', key: 'gbp' },
		{ title: 'USD', key: 'usd' },
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
					onSelected={arg => setSelected(arg)}
				/>
			</ScrollView>
		</React.Fragment>
	);
}
