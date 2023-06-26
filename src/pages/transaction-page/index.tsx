import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ScrollViewPage, TitleSubtitle } from '@/components';
import { useFormatDate } from '@/hooks';
import { RootStackParamListProps } from '@/routes/types';
import { themes } from '@/themes';

export function TransactionPage() {
	const {
		params: { data },
	} = useRoute<RouteProp<RootStackParamListProps, 'TransactionPage'>>();
	const { spaces } = themes;
	const { t } = useTranslation();
	const time = useFormatDate(new Date(data.timestamp * 1000));

	const list = [
		{
			title: data.transactionType === 'incoming' ? t('received') : t('sent'),
			subTitle: data.amount,
		},
		{ title: t('date'), subTitle: time.date },
		{ title: t('hour'), subTitle: time.time },
		{ title: 'Hash', subTitle: data.hash },
		{
			title: t('block-number'),
			subTitle: data.blockNumber.toString(),
		},
	];

	return (
		<ScrollViewPage>
			{list.map((item, index) => (
				<TitleSubtitle
					key={index}
					title={item.title}
					subTitle={item.subTitle}
					marginB={spaces.space_25}
				/>
			))}
		</ScrollViewPage>
	);
}
