import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { ScrollView, TitleSubtitle } from '@/components';
import { useFormatDate } from '@/hooks';
import { RootStackParamListProps } from '@/routes/types';
import { useAppSettings } from '@/stores';
import { themes } from '@/themes';

export function TransactionPage() {
	const {
		params: { data },
	} = useRoute<RouteProp<RootStackParamListProps, 'TransactionPage'>>();
	const { spaces } = themes;
	const { isTablet } = useAppSettings(state => state);
	const { t } = useTranslation();

	const time = useFormatDate(new Date(data.timestamp * 1000));

	const MARGIN_BOTTOM = isTablet ? `${hp('5%')}px` : spaces.space_25;

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
		<ScrollView>
			{list.map((item, index) => (
				<TitleSubtitle
					key={index}
					title={item.title}
					subTitle={item.subTitle}
					marginB={MARGIN_BOTTOM}
				/>
			))}
		</ScrollView>
	);
}
