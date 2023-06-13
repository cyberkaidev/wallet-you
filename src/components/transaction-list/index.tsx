import React from 'react';
import { Text } from '../text';
import { themes } from '@src/themes';
import { IconArrowDown, IconArrowUp } from '@src/assets';
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamListProps } from '@src/routes/types';
import { useFormatCurrency, useFormatDate } from '@src/hooks';
import { calculateBalance } from '@src/functions';
import { useAppSettings, useBitcoinDataPrices, useUserData } from '@src/stores';
import { SkeletonLoading } from '../skeleton-loading';
import {
	Center,
	Circle,
	FirstItem,
	PriceTitles,
	TimeTitles,
	TransactionItemContainer,
	TransactionListContainer,
} from './styles';

export function TransactionList() {
	const { t } = useTranslation();
	const { data, status } = useUserData(state => state.transactions);
	const currency = useAppSettings(state => state.currency);
	const navigation = useNavigation<NavigationProp<RootStackParamListProps>>();
	const currentPrice = useBitcoinDataPrices(state => state.data?.current_price);

	return (
		<TransactionListContainer testID="idTransactionList">
			<Text size="XL" weight="medium" marginB={themes.spaces.space_15}>
				{t('transactions')}
			</Text>

			{(status === 'loading' || status === null) && (
				<SkeletonLoading widthPorcent="90%" heightPorcent="9%" radius={10} />
			)}

			{status === 'failed' && (
				<Center>
					<Text color={themes.colors.grey_300} weight="bold">
						{t('request-error-try-later')}
					</Text>
				</Center>
			)}

			{data.length === 0 && status === 'success' && (
				<Center>
					<Text color={themes.colors.grey_300} weight="bold">
						{t('you-dont-have-transactions')}
					</Text>
				</Center>
			)}

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
							<FirstItem>
								<Circle>
									{item.transactionType === 'incoming' && <IconArrowDown size={18} />}
									{item.transactionType === 'outgoing' && <IconArrowUp size={18} />}
								</Circle>
								<TimeTitles>
									<Text size="M" weight="bold">
										{useFormatDate(new Date(item.timestamp * 1000)).date}
									</Text>
									<Text size="M" weight="bold" color={themes.colors.grey_300}>
										{useFormatDate(new Date(item.timestamp * 1000)).time}
									</Text>
								</TimeTitles>
							</FirstItem>
							<PriceTitles>
								<Text
									size="M"
									weight="bold"
									color={
										item.transactionType === 'incoming' ? themes.colors.green : themes.colors.red
									}
								>
									{useFormatCurrency(
										calculateBalance({
											balance: item.amount,
											currentPrice: currentPrice?.[currency],
										}),
									)}
								</Text>
								<Text size="M" weight="bold" color={themes.colors.grey_300}>
									{item.amount} BTC
								</Text>
							</PriceTitles>
						</TransactionItemContainer>
					);
				})}
		</TransactionListContainer>
	);
}
