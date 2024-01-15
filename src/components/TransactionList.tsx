import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconArrowDown, IconArrowRight, IconArrowUp } from '@/assets';
import { calculateBalance } from '@/functions/calculateBalance';
import { borderRadius, colors, spaces, width } from '@/helpers/themes';
import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { useFormatDate } from '@/hooks/useFormatDate';
import { useAppSettings } from '@/stores/useAppSettings';
import { useBitcoinDataPrices } from '@/stores/useBitcoinDataPrices';
import { useUserData } from '@/stores/useUserData';
import { RootStackParamListProps } from '@/types/RoutesType';

import { SkeletonLoading } from './SkeletonLoading';
import { Text } from './Text';

export function TransactionList() {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings(state => state);
	const { data, status } = useUserData(state => state.transactions);
	const currency = useAppSettings(state => state.currency);
	const navigation = useNavigation<NavigationProp<RootStackParamListProps>>();
	const currentPrice = useBitcoinDataPrices(state => state.data?.current_price);

	const SIZE_ICON_STATUS = hp('2.5%');
	const SIZE_ICON_ARROW = hp('2%');
	const PADDING_ITEM_TABLET = hp('3.5%');
	const MARGIN_TOP_TRANSACTION = hp('5%');

	return (
		<View
			testID="idTransactionList"
			style={[styles.container, { marginTop: isTablet ? MARGIN_TOP_TRANSACTION : spaces.space_25 }]}
		>
			<Text size="xl" weight="medium" marginB={spaces.space_10}>
				{t('transactions')}
			</Text>

			{(status === 'loading' || status === null) && (
				<SkeletonLoading heightPorcent="12%" radius={10} />
			)}

			{status === 'failed' && (
				<View style={styles.center}>
					<Text color={colors.light_grey} weight="bold">
						{t('request-error-try-later')}
					</Text>
				</View>
			)}

			{data.length === 0 && status === 'success' && (
				<View style={styles.center}>
					<Text color={colors.light_grey} weight="bold">
						{t('you-dont-have-transactions')}
					</Text>
				</View>
			)}

			<View style={styles.transactionContainer}>
				{data.length > 0 &&
					status === 'success' &&
					data.map((item, index) => {
						if (item.transactionType === 'zero-transfer') return;
						return (
							<TouchableOpacity
								testID={`id${index}`}
								key={index}
								style={[
									styles.Button,
									{ marginLeft: isTablet ? spaces.space_20 : spaces.space_10 },
								]}
								onPress={() => navigation.navigate('TransactionPage', { data: item })}
							>
								<View
									style={[
										styles.circle,
										{ marginRight: isTablet ? spaces.space_20 : spaces.space_10 },
									]}
								>
									{item.transactionType === 'incoming' && <IconArrowDown size={SIZE_ICON_STATUS} />}
									{item.transactionType === 'outgoing' && <IconArrowUp size={SIZE_ICON_STATUS} />}
								</View>
								<View
									style={[
										styles.item,
										{
											marginVertical: isTablet ? PADDING_ITEM_TABLET : spaces.space_25,
											marginRight: isTablet ? spaces.space_20 : spaces.space_10,
											borderBottomColor:
												data.length != index + 1 ? colors.dark_grey : colors.transparent,
										},
									]}
								>
									<View style={styles.column}>
										<View style={styles.labels}>
											<Text size="m" weight="bold">
												{useFormatDate(new Date(item.timestamp * 1000)).date}
											</Text>
											<Text size="m" weight="bold">
												{item.transactionType === 'incoming' ? '+ ' : '- '}
												{useFormatCurrency(
													calculateBalance({
														balance: item.amount,
														currentPrice: currentPrice?.[currency],
													}),
												)}
											</Text>
										</View>
										<View style={styles.labels}>
											<Text weight="medium" color={colors.light_grey}>
												{useFormatDate(new Date(item.timestamp * 1000)).time}
											</Text>
											<Text weight="medium" color={colors.light_grey}>
												{item.amount} BTC
											</Text>
										</View>
									</View>
									<IconArrowRight size={SIZE_ICON_ARROW} color={colors.dark_grey} />
								</View>
							</TouchableOpacity>
						);
					})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: width.max_width,
		alignSelf: 'center',
	},
	center: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	transactionContainer: {
		borderRadius: borderRadius.radius_10,
		backgroundColor: colors.black_000,
	},
	Button: {
		flex: 1,
		flexDirection: 'row',
	},
	circle: {
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	item: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
	},
	column: {
		flex: 1,
		marginRight: spaces.space_15,
	},
	labels: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
