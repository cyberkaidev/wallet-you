import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconArrowLeft } from '@/assets';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Text } from '@/components/Text';
import { statusBarHeight } from '@/helpers/statusBarHeight';
import { colors, spaces } from '@/helpers/themes';
import { HeaderTitleProps } from '@/types/HeaderTitleType';

export function HeaderBack({ title }: HeaderTitleProps) {
	const navigation = useNavigation();

	const useHeightHeader = React.useMemo(() => hp('8%') + statusBarHeight, []);

	return (
		<View testID="idHeaderBack" style={[styles.container, { height: useHeightHeader }]}>
			<View style={styles.content}>
				<ButtonIcon onPress={() => navigation.goBack()}>
					<IconArrowLeft color={colors.light_cyan} porcentSize="5%" />
				</ButtonIcon>

				<View style={styles.title}>
					<Text size="xl" weight="medium">
						{title}
					</Text>
				</View>
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
		position: 'relative',
		width: '100%',
		height: hp('8%'),
		paddingHorizontal: spaces.space_10,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	title: {
		zIndex: -1,
		left: 0,
		right: 0,
		position: 'absolute',
		alignItems: 'center',
	},
});
