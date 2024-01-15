import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollView } from '@/components/ScrollView';
import { TitleSubtitle } from '@/components/TitleSubtitle';
import { spaces } from '@/helpers/themes';
import { useFormatDate } from '@/hooks/useFormatDate';
import { useAppSettings } from '@/stores/useAppSettings';
import { RootStackParamListProps } from '@/types/RoutesType';

export function TransactionPage() {
	const {
		params: { data },
	} = useRoute<RouteProp<RootStackParamListProps, 'TransactionPage'>>();
	const { isTablet } = useAppSettings(state => state);
	const { t } = useTranslation();

	const time = useFormatDate(new Date(data.timestamp * 1000));

	const MARGIN_BOTTOM = isTablet ? hp('3.5%') : spaces.space_25;

	const transactionsData = [
		{
			title: data.transactionType === 'incoming' ? t('received') : t('sent'),
			subTitle: data.amount,
		},
		{ title: t('date'), subTitle: time.date },
		{ title: t('hour'), subTitle: time.time },
		{ title: 'Hash', subTitle: data.hash },
		{
			title: t('block-number'),
			subTitle: data.blockNumber ? data.blockNumber.toString() : '-',
		},
	];

	return (
		<ScrollView>
			{transactionsData.map((item, index) => (
				<LimitedWidthContainer key={index}>
					<TitleSubtitle title={item.title} subTitle={item.subTitle} marginB={MARGIN_BOTTOM} />
				</LimitedWidthContainer>
			))}
		</ScrollView>
	);
}
