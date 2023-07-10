import React from 'react';
import { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { themes } from '@/themes';

import { Text } from '../../../text';
import {
	FirstItem,
	HeaderAnimatedContainer,
	OpacityAnimation,
	SafeArea,
	SecondtItem,
} from './styles';
import { HeaderAnimatedProps } from './types';

export function HeaderAnimated({ translationY, headerTitle }: HeaderAnimatedProps) {
	const { spaces } = themes;

	const HEIGHT_ITEM_HEADER = hp('8%');

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
			<SecondtItem style={translateY}>
				<Text size="XXL" weight="bold" marginB={spaces.space_5}>
					{headerTitle}
				</Text>
			</SecondtItem>
			<HeaderAnimatedContainer testID="idHeaderAnimatedContainer">
				<SafeArea>
					<FirstItem>
						<OpacityAnimation style={topOpacity}>
							<Text size="XXL" weight="bold">
								{headerTitle}
							</Text>
						</OpacityAnimation>
					</FirstItem>
				</SafeArea>
			</HeaderAnimatedContainer>
		</React.Fragment>
	);
}
