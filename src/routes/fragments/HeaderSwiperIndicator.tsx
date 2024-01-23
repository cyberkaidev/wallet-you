import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/Text';
import { borderRadius, colors, spaces } from '@/helpers/themes';
import { HeaderSwiperIndicatorProps } from '@/types/HeaderSwiperIndicatorType';

export function HeaderSwiperIndicator({ title }: HeaderSwiperIndicatorProps) {
	return (
		<View testID="idHeaderSwiperIndicator" style={styles.container}>
			<View style={styles.indicator} />
			<Text size="xl" weight="medium">
				{title}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black_100,
		paddingHorizontal: spaces.space_15,
		paddingVertical: spaces.space_10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	indicator: {
		width: 35,
		height: 5,
		borderRadius: borderRadius.radius_10,
		marginBottom: spaces.space_5,
		backgroundColor: colors.dark_grey,
	},
});
