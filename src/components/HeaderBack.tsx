import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconArrowLeft } from '@/assets';
import { statusBarHeight } from '@/helpers/statusBarHeight';
import { colors, spaces } from '@/helpers/themes';
import { HeaderTitleProps } from '@/types/HeaderTitleType';

import { ButtonIcon } from './ButtonIcon';
import { Text } from './Text';

export function HeaderBack({ title }: HeaderTitleProps) {
	const navigation = useNavigation();

	const useHeightHeader = React.useMemo(() => {
		return hp('8%') + statusBarHeight;
	}, []);

	return (
		<View testID="idHeaderTitle" style={[styles.container, { height: useHeightHeader }]}>
			<View style={styles.content}>
				<ButtonIcon onPress={() => navigation.goBack()}>
					<IconArrowLeft color={colors.light_cyan} />
				</ButtonIcon>
				{Platform.OS === 'android' && (
					<Text size="xl" weight="medium" marginL={spaces.space_25}>
						{title}
					</Text>
				)}
				{Platform.OS === 'ios' && (
					<View style={styles.ios}>
						<Text size="xl" weight="medium">
							{title}
						</Text>
					</View>
				)}
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
		position: 'relative',
		width: '100%',
		height: hp('8%'),
		paddingHorizontal: spaces.space_15,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	ios: {
		zIndex: -1,
		left: 0,
		right: 0,
		position: 'absolute',
		alignItems: 'center',
	},
});
