import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

import { Text } from '@/components';
import { themes } from '@/themes';

import { HeaderSwiperIndicatorContainer, Indicator } from './styles';
import { HeaderSwiperIndicatorProps } from './types';

export function HeaderSwiperIndicator({ title }: HeaderSwiperIndicatorProps) {
	React.useEffect(() => {
		if (Platform.OS === 'android') setStatusBarBackgroundColor('black', true);
		return () => {
			if (Platform.OS === 'android') setStatusBarBackgroundColor(themes.colors.black_000, true);
		};
	}, []);

	return (
		<HeaderSwiperIndicatorContainer testID="idHeaderSwiperIndicator">
			<Indicator />
			<Text size="XL" weight="medium">
				{title}
			</Text>
		</HeaderSwiperIndicatorContainer>
	);
}
