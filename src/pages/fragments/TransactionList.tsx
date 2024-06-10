import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconArrowDownLeft, IconArrowRight, IconArrowUpRight } from '@/assets';
import { SkeletonLoading } from '@/components/SkeletonLoading';
import { Text } from '@/components/Text';
import { borderRadius, colors, spaces, width } from '@/helpers/themes';
import { useFormatDate } from '@/hooks/useFormatDate';
import { useAppSettings } from '@/stores/useAppSettings';
import { useUserData } from '@/stores/useUserData';

export function TransactionList() {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings();
	const { data, status } = useUserData(state => state.transactions);
	const navigation = useNavigation();

	const PADDING_ITEM_TABLET = hp('3.5%');
	const MARGIN_TOP_TRANSACTION = hp('5%');

	if (status === 'failed' || (status === 'success' && data.length === 0)) return <React.Fragment />;

	return (
		<View
			testID="idTransactionList"
			style={[styles.container, { marginTop: isTablet ? MARGIN_TOP_TRANSACTION : spaces.space_25 }]}
		>
			<Text size="m" weight="medium" marginB={spaces.space_5}>
				{t('transactions')}
			</Text>

			{(status === 'loading' || status === null) && (
				<SkeletonLoading heightPorcent="12%" radius={10} />
			)}

			<View style={styles.transactionContainer}>
				{status === 'success' &&
					data.map((item, index) => {
						if (item.transactionType === 'zero-transfer') return;
						return (
							<TouchableOpacity
								testID={`id${index}`}
								key={index}
								style={[
									styles.button,
									{ paddingLeft: isTablet ? spaces.space_20 : spaces.space_10 },
								]}
								onPress={() => navigation.navigate('TransactionPage', { data: item })}
							>
								<View
									style={[
										styles.iconStatus,
										{ marginRight: isTablet ? spaces.space_20 : spaces.space_10 },
									]}
								>
									{item.transactionType === 'incoming' && <IconArrowDownLeft />}
									{item.transactionType === 'outgoing' && <IconArrowUpRight />}
								</View>
								<View
									style={[
										styles.item,
										{
											paddingVertical: isTablet ? PADDING_ITEM_TABLET : spaces.space_25,
											paddingRight: isTablet ? spaces.space_20 : spaces.space_10,
											borderBottomColor:
												data.length != index + 1 ? colors.dark_cyan : colors.black_000,
										},
									]}
								>
									<View style={styles.row}>
										<View style={styles.labels}>
											<Text weight="bold" marginB={spaces.space_5}>
												{useFormatDate(new Date(item.timestamp * 1000)).date}
											</Text>
											<Text weight="medium" color={colors.light_grey}>
												{useFormatDate(new Date(item.timestamp * 1000)).time}
											</Text>
										</View>
										<Text weight="bold">
											{item.transactionType === 'incoming' ? '+ ' : '- '} {item.amount} BTC
										</Text>
									</View>
									<IconArrowRight porcentSize="4%" color={colors.dark_grey} />
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
	transactionContainer: {
		borderRadius: borderRadius.radius_10,
		backgroundColor: colors.black_000,
	},
	button: {
		flex: 1,
		flexDirection: 'row',
	},
	iconStatus: {
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	item: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderStyle: 'solid',
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: spaces.space_10,
	},
	labels: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
});
