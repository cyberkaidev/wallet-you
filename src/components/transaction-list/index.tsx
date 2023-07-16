import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconArrowDown, IconArrowRight, IconArrowUp } from '@/assets';
import { calculateBalance } from '@/functions';
import { useFormatCurrency, useFormatDate } from '@/hooks';
import { RootStackParamListProps } from '@/routes/types';
import { useAppSettings, useBitcoinDataPrices, useUserData } from '@/stores';
import { themes } from '@/themes';

import { SkeletonLoading } from '../skeleton-loading';
import { Text } from '../text';
import {
	Center,
	Circle,
	Column,
	Items,
	TextContainer,
	TransactionContainer,
	TransactionItemContainer,
	TransactionListContainer,
} from './styles';

export function TransactionList() {
	const { t } = useTranslation();
	const { data, status } = useUserData(state => state.transactions);
	const currency = useAppSettings(state => state.currency);
	const navigation = useNavigation<NavigationProp<RootStackParamListProps>>();
	const currentPrice = useBitcoinDataPrices(state => state.data?.current_price);

	const SIZE_ICON_STATUS = hp('2.5%');
	const SIZE_ICON_ARROW = hp('2%');

	return (
		<TransactionListContainer testID="idTransactionList">
			<Text size="XL" weight="medium" marginB={themes.spaces.space_10}>
				{t('transactions')}
			</Text>

			{(status === 'loading' || status === null) && (
				<SkeletonLoading widthPorcent="92%" heightPorcent="12%" radius={10} />
			)}

			{status === 'failed' && (
				<Center>
					<Text color={themes.colors.light_grey} weight="bold">
						{t('request-error-try-later')}
					</Text>
				</Center>
			)}

			{data.length === 0 && status === 'success' && (
				<Center>
					<Text color={themes.colors.light_grey} weight="bold">
						{t('you-dont-have-transactions')}
					</Text>
				</Center>
			)}

			<TransactionContainer>
				{data.length > 0 &&
					status === 'success' &&
					data.map((item, index) => {
						if (item.transactionType === 'zero-transfer') return;
						return (
							<TransactionItemContainer
								testID={`id${index}`}
								key={index}
								onPress={() => navigation.navigate('TransactionPage', { data: item })}
							>
								<Circle>
									{item.transactionType === 'incoming' && <IconArrowDown size={SIZE_ICON_STATUS} />}
									{item.transactionType === 'outgoing' && <IconArrowUp size={SIZE_ICON_STATUS} />}
								</Circle>
								<Items borderVisible={data.length != index + 1}>
									<Column>
										<TextContainer>
											<Text size="M" weight="bold">
												{useFormatDate(new Date(item.timestamp * 1000)).date}
											</Text>
											<Text size="M" weight="bold">
												{item.transactionType === 'incoming' ? '+ ' : '- '}
												{useFormatCurrency(
													calculateBalance({
														balance: item.amount,
														currentPrice: currentPrice?.[currency],
													}),
												)}
											</Text>
										</TextContainer>
										<TextContainer>
											<Text size="S" weight="medium" color={themes.colors.light_grey}>
												{useFormatDate(new Date(item.timestamp * 1000)).time}
											</Text>
											<Text size="S" weight="medium" color={themes.colors.light_grey}>
												{item.amount} BTC
											</Text>
										</TextContainer>
									</Column>
									<IconArrowRight size={SIZE_ICON_ARROW} color={themes.colors.dark_grey} />
								</Items>
							</TransactionItemContainer>
						);
					})}
			</TransactionContainer>
		</TransactionListContainer>
	);
}
