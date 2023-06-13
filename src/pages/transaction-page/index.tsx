import React from 'react';
import { themes } from '@src/themes';
import { ScrollViewPage, TitleSubtitle } from '@src/components';
import { useTranslation } from 'react-i18next';
import { useFormatDate } from '@src/hooks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamListProps } from '@src/routes/types';

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
