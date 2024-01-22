import Constants from 'expo-constants';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colors, spaces } from '@/helpers/themes';
import { HeaderTitleProps } from '@/types/HeaderTitleType';

import { Text } from './Text';

export function HeaderTitle({ title }: HeaderTitleProps) {
	const useHeightHeader = React.useMemo(() => {
		const HEIGHT_STATUS_BAR = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;
		return hp('8%') + HEIGHT_STATUS_BAR;
	}, []);

	return (
		<View testID="idHeaderTitle" style={[styles.container, { height: useHeightHeader }]}>
			<View style={styles.content}>
				<Text size="xxl" weight="bold">
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
