import React from 'react';
import { Text } from '@src/components';
import { HeaderSwiperIndicatorContainer, Indicator, SafeArea } from './styles';
import { HeaderSwiperIndicatorProps } from './types';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { themes } from '@src/themes';
import { Platform } from 'react-native';

export function HeaderSwiperIndicator({ title }: HeaderSwiperIndicatorProps) {
	React.useEffect(() => {
		if (Platform.OS === 'android') setStatusBarBackgroundColor('black', true);
		return () => {
			if (Platform.OS === 'android') setStatusBarBackgroundColor(themes.colors.black_300, true);
		};
	}, []);

	return (
		<HeaderSwiperIndicatorContainer testID="idHeaderSwiperIndicator">
			<SafeArea>
				<Indicator />
				<Text size="XXL" weight="medium">
					{title}
				</Text>
			</SafeArea>
		</HeaderSwiperIndicatorContainer>
	);
}
