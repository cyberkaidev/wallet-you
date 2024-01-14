import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, StyleSheet, View } from 'react-native';

import { ButtonTitleGhost } from '@/components/ButtonTitleGhost';
import { Text } from '@/components/Text';
import { borderRadius, colors, spaces, width } from '@/helpers/themes';
import { AlertModalProps } from '@/types/AlertModalType';

export function AlertModal({ title, visible, onCancel, onConfirm }: AlertModalProps) {
	const { t } = useTranslation();

	return (
		<Modal testID="idModal" visible={visible} transparent>
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
							onPress={onCancel}
							marginR={spaces.space_30}
						/>
						<ButtonTitleGhost
							testID="idConfirm"
							title={t('confirm')}
							size="small"
							onPress={onConfirm}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: colors.black_100_50pct,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: spaces.space_15,
	},
	body: {
		width: '100%',
		maxWidth: width.max_width,
		paddingHorizontal: spaces.space_20,
		paddingVertical: spaces.space_30,
		borderRadius: borderRadius.radius_15,
		backgroundColor: colors.black_000,
	},
	footer: {
		width: '100%',
		marginTop: spaces.space_30,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});
