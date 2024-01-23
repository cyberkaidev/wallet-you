import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { colors, spaces } from '@/helpers/themes';
import { HeaderSwiperOptionsProps } from '@/types/HeaderSwiperOptionsType';

import { ButtonTitleGhost } from './ButtonTitleGhost';
import { Text } from './Text';

export function HeaderSwiperOptions({
	title,
	onAction,
	disableAction = false,
}: HeaderSwiperOptionsProps) {
	const navigation = useNavigation();
	const { t } = useTranslation();

	return (
		<View testID="idHeaderSwiperOptions" style={styles.container}>
			<View style={styles.title}>
				<Text size="xl" weight="medium">
					{title}
				</Text>
			</View>
			<ButtonTitleGhost
				testID="idButtonLeft"
				title={t('cancel')}
				size="small"
				buttonsWeight="medium"
				onPress={() => navigation.goBack()}
				marginL={spaces.space_10}
			/>
			<ButtonTitleGhost
				testID="idButtonRight"
				title={t('change')}
				size="small"
				buttonsWeight="medium"
				disabled={disableAction}
				onPress={onAction}
				marginR={spaces.space_10}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black_100,
		paddingVertical: spaces.space_10,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'relative',
	},
	title: {
		position: 'absolute',
		alignItems: 'center',
		width: '100%',
	},
});
