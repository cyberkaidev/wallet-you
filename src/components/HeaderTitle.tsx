import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { statusBarHeight } from '@/helpers/statusBarHeight';
import { colors, spaces } from '@/helpers/themes';
import { HeaderTitleProps } from '@/types/HeaderTitleType';

import { Text } from './Text';

export function HeaderTitle({ title }: HeaderTitleProps) {
	const useHeightHeader = React.useMemo(() => {
		return hp('8%') + statusBarHeight;
	}, []);

	return (
		<View testID="idHeaderTitle" style={[styles.container, { height: useHeightHeader }]}>
			<View style={styles.content}>
				<Text size="xl" weight="medium">
					{title}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: colors.black_000,
		justifyContent: 'flex-end',
	},
	content: {
		width: '100%',
		height: hp('8%'),
		paddingHorizontal: spaces.space_15,
		justifyContent: 'center',
		alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
	},
});
