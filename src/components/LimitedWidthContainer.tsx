import React from 'react';
import { StyleSheet, View } from 'react-native';

import { width } from '@/helpers/themes';
import { LimitedWidthContainerProps } from '@/types/LimitedWidthContainerType';

export function LimitedWidthContainer({ children }: LimitedWidthContainerProps) {
	return (
		<View testID="idLimitedWidth" style={styles.container}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		maxWidth: width.max_width,
		width: '100%',
		alignSelf: 'center',
	},
});
