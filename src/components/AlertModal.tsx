import React from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, View } from 'react-native';

import { ButtonTitleGhost } from '@/components/ButtonTitleGhost';
import { Text } from '@/components/Text';
import { borderRadius, colors, spaces, width } from '@/helpers/themes';
import { useAlertModal } from '@/stores/useAlertModal';

const radius = Platform.OS === 'android' ? borderRadius.radius_25 : borderRadius.radius_15;

export function AlertModal() {
	const { t } = useTranslation();
	const { visible, title, onCancel, onConfirm, hideAlert } = useAlertModal();

	if (!visible) return;

	return (
		<View style={styles.background}>
			<View style={styles.body} testID="idAlertContainer">
				<Text size="xxl" weight="medium">
					{title}
				</Text>
				<View style={styles.footer}>
					<ButtonTitleGhost
						testID="idCancel"
						title={t('cancel')}
						size="small"
						onPress={() => {
							onCancel?.();
							hideAlert();
						}}
						marginR={spaces.space_30}
					/>
					<ButtonTitleGhost
						testID="idConfirm"
						title={t('confirm')}
						size="small"
						onPress={() => {
							onConfirm?.();
							hideAlert();
						}}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		zIndex: 9999999999,
		backgroundColor: colors.black_100_50pct,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: spaces.space_15,
	},
	body: {
		width: '90%',
		maxWidth: width.max_width,
		paddingHorizontal: spaces.space_20,
		paddingTop: spaces.space_30,
		paddingBottom: spaces.space_15,
		borderRadius: radius,
		backgroundColor: colors.black_000,
	},
	footer: {
		width: '100%',
		marginTop: spaces.space_30,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});
