import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { ButtonTitleGhost } from '@/components/ButtonTitleGhost';
import { Text } from '@/components/Text';
import { borderRadius, colors, spaces, width } from '@/helpers/themes';
import { useAlertModal } from '@/stores/useAlertModal';

export function AlertModal() {
	const { t } = useTranslation();
	const { visible, title, onCancel, onConfirm, hideAlert } = useAlertModal();

	if (!visible) return;

	return (
		<View style={styles.background} testID="idAlertModal">
			<View style={styles.body}>
				<Text size="xxl" weight="medium">
					{title}
				</Text>
				<View style={styles.footer}>
					<ButtonTitleGhost
						testID="idCancel"
						title={t('cancel')}
						size="small"
						marginR={spaces.space_30}
						onPress={() => {
							onCancel?.();
							hideAlert();
						}}
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
		maxWidth: width.max_width_500,
		paddingHorizontal: spaces.space_20,
		paddingTop: spaces.space_30,
		paddingBottom: spaces.space_15,
		borderRadius: borderRadius.radius_25,
		backgroundColor: colors.black_000,
	},
	footer: {
		width: '100%',
		marginTop: spaces.space_30,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});
