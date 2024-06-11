import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { ButtonTitleGhost } from '@/components/ButtonTitleGhost';
import { Text } from '@/components/Text';
import { borderRadius, colors, scaffold, spaces } from '@/helpers/themes';
import { HeaderSwiperIndicatorProps } from '@/types/HeaderSwiperIndicatorType';

export function HeaderSwiperIndicator({ title }: HeaderSwiperIndicatorProps) {
	const navigation = useNavigation();
	const { t } = useTranslation();

	return (
		<View testID="idHeaderSwiperIndicator" style={styles.container}>
			<View style={styles.indicator} />
			<View style={styles.content}>
				<View style={styles.title}>
					<Text size="xl" weight="medium">
						{title}
					</Text>
				</View>
				<ButtonTitleGhost
					testID="idButtonLeft"
					title={t('back')}
					size="small"
					buttonsWeight="medium"
					onPress={() => navigation.goBack()}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black_100,
		paddingVertical: spaces.space_10,
		alignItems: 'center',
		width: '100%',
	},
	title: {
		position: 'absolute',
		alignItems: 'center',
		left: 0,
		right: 0,
	},
	indicator: {
		width: 35,
		height: 5,
		borderRadius: borderRadius.radius_10,
		marginBottom: spaces.space_5,
		backgroundColor: colors.dark_grey,
	},
	content: {
		width: '100%',
		paddingHorizontal: scaffold.header_space_horizontal,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		position: 'relative',
	},
});
