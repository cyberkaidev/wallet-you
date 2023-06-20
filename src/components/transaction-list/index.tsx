import React from 'react';
import { Text } from '../text';
import { themes } from '@src/themes';
import { IconArrowDown, IconArrowRight, IconArrowUp } from '@src/assets';
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamListProps } from '@src/routes/types';
import { useFormatCurrency, useFormatDate } from '@src/hooks';
import { calculateBalance } from '@src/functions';
import { useAppSettings, useBitcoinDataPrices, useUserData } from '@src/stores';
import { SkeletonLoading } from '../skeleton-loading';
import * as Styles from './styles';

export function TransactionList() {
	const { t } = useTranslation();
	const { data, status } = useUserData(state => state.transactions);
	const currency = useAppSettings(state => state.currency);
	const navigation = useNavigation<NavigationProp<RootStackParamListProps>>();
	const currentPrice = useBitcoinDataPrices(state => state.data?.current_price);

	return (
		<Styles.TransactionListContainer testID="idTransactionList">
			<Text size="XL" weight="medium" marginB={themes.spaces.space_10}>
				{t('transactions')}
			</Text>

			{(status === 'loading' || status === null) && (
				<SkeletonLoading widthPorcent="90%" heightPorcent="9%" radius={10} />
			)}

			{status === 'failed' && (
				<Styles.Center>
					<Text color={themes.colors.grey_300} weight="bold">
						{t('request-error-try-later')}
					</Text>
				</Styles.Center>
			)}

			{data.length === 0 && status === 'success' && (
				<Styles.Center>
					<Text color={themes.colors.grey_300} weight="bold">
						{t('you-dont-have-transactions')}
					</Text>
				</Styles.Center>
			)}

			<Styles.TransactionContainer>
				{data.length > 0 &&
					status === 'success' &&
					data.map((item, index) => {
						if (item.transactionType === 'zero-transfer') return;
						return (
							<Styles.TransactionItemContainer
								testID={`id${index}`}
								key={index}
								onPress={() => navigation.navigate('TransactionPage', { data: item })}
							>
								<Styles.Circle>
									{item.transactionType === 'incoming' && <IconArrowDown size={18} />}
									{item.transactionType === 'outgoing' && <IconArrowUp size={18} />}
								</Styles.Circle>
								<Styles.Items borderVisible={data.length != index + 1}>
									<Styles.Column>
										<Styles.TextContainer>
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
										</Styles.TextContainer>
										<Styles.TextContainer>
											<Text size="S" weight="medium" color={themes.colors.grey_300}>
												{useFormatDate(new Date(item.timestamp * 1000)).time}
											</Text>
											<Text size="S" weight="medium" color={themes.colors.grey_300}>
												{item.amount} BTC
											</Text>
										</Styles.TextContainer>
									</Styles.Column>
									<IconArrowRight size={13} color={themes.colors.grey_200} />
								</Styles.Items>
							</Styles.TransactionItemContainer>
						);
					})}
			</Styles.TransactionContainer>
		</Styles.TransactionListContainer>
	);
}
