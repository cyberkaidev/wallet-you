import Constants from 'expo-constants';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spaces } from '@/helpers/themes';
import { HeaderAnimatedProps } from '@/types/HeaderAnimatedType';

import { Text } from '../Text';

export function HeaderAnimated({ translationY, headerTitle }: HeaderAnimatedProps) {
	const HEIGHT_ITEM_HEADER = hp('8%');
	const HEIGHT_STATUS_BAR = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;
	const HEIGHT_FIRST_ITEM = hp('8%');
	const HEIGHT_SECOND_ITEM = hp('8%') + HEIGHT_FIRST_ITEM + HEIGHT_STATUS_BAR;

	const translateY = useAnimatedStyle(() => ({
		transform: [
			{
				translateY: interpolate(
					translationY.value,
					[20, HEIGHT_ITEM_HEADER],
					[0, -HEIGHT_ITEM_HEADER],
					Extrapolate.CLAMP,
				),
			},
		],
	}));

	const topOpacity = useAnimatedStyle(() => ({
		opacity: interpolate(
			translationY.value,
			[-HEIGHT_ITEM_HEADER, 0, 50, HEIGHT_ITEM_HEADER],
			[0, 0, 0, 1],
			Extrapolate.CLAMP,
		),
	}));

	return (
		<React.Fragment>
			<Animated.View style={[translateY, styles.secondItem, { height: HEIGHT_SECOND_ITEM }]}>
				<Text size="xxl" weight="bold" marginB={spaces.space_5}>
					{headerTitle}
				</Text>
			</Animated.View>
			<View testID="idHeaderAnimatedContainer" style={styles.animatedContainer}>
				<SafeAreaView>
					<View style={[styles.firstItem, { height: HEIGHT_FIRST_ITEM }]}>
						<Animated.View style={topOpacity}>
							<Text size="xxl" weight="bold">
								{headerTitle}
							</Text>
						</Animated.View>
					</View>
				</SafeAreaView>
			</View>
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	secondItem: {
		position: 'absolute',
		top: 0,
		width: '100%',
		zIndex: 1,
		paddingHorizontal: spaces.space_15,
		justifyContent: 'flex-end',
		backgroundColor: colors.black_000,
	},
	animatedContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.black_000,
		zIndex: 99999999,
	},
	firstItem: {
		zIndex: 2,
		paddingHorizontal: spaces.space_15,
		justifyContent: 'center',
		backgroundColor: colors.black_000,
	},
});
