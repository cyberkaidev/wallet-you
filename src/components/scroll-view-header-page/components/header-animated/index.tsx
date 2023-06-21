import React from 'react';
import { Text } from '../../../text';
import {
	FirstItem,
	HeaderAnimatedContainer,
	SafeArea,
	SecondtItem,
	OpacityAnimation,
} from './styles';
import { HeaderAnimatedProps } from './types';
import { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { themes } from '@src/themes';

export function HeaderAnimated({ translationY, headerTitle }: HeaderAnimatedProps) {
	const translateY = useAnimatedStyle(() => ({
		transform: [
			{ translateY: interpolate(translationY.value, [20, 60], [60, -60], Extrapolate.CLAMP) },
		],
	}));

	const bottomOpacity = useAnimatedStyle(() => ({
		opacity: interpolate(translationY.value, [-100, 0, 60], [1, 1, 0], Extrapolate.CLAMP),
	}));

	const topOpacity = useAnimatedStyle(() => ({
		opacity: interpolate(translationY.value, [-100, 0, 40, 65], [0, 0, 0, 1], Extrapolate.CLAMP),
	}));

	return (
		<HeaderAnimatedContainer>
			<SafeArea>
				<FirstItem>
					<OpacityAnimation style={topOpacity}>
						<Text size="XXL" weight="bold">
							{headerTitle}
						</Text>
					</OpacityAnimation>
				</FirstItem>
				<SecondtItem style={translateY}>
					<OpacityAnimation style={bottomOpacity}>
						<Text size="XXL" weight="bold" marginB={themes.spaces.space_5}>
							{headerTitle}
						</Text>
					</OpacityAnimation>
				</SecondtItem>
			</SafeArea>
		</HeaderAnimatedContainer>
	);
}
