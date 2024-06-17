import React from 'react';
import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { statusBarHeight } from '@/helpers/statusBarHeight';
import { colors, scaffold } from '@/helpers/themes';
import { HeaderTitleProps } from '@/types/HeaderTitleType';

import { Text } from '../../components/Text';

export function HeaderTitle({ title }: HeaderTitleProps) {
	const useHeightHeader = React.useMemo(() => hp('8%') + statusBarHeight, []);

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
		backgroundColor: colors.black_100,
		justifyContent: 'flex-end',
	},
	content: {
		width: '100%',
		height: hp('8%'),
		paddingHorizontal: scaffold.header_space_horizontal,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
