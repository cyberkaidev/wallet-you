import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { themes } from '@src/themes';

export function CustomGradient() {
	return (
		<Defs key="gradient">
			<LinearGradient id="gradient" x1="0" x2="0%" y2="9%">
				<Stop offset="0%" stopColor={themes.colors.purple_100} stopOpacity="0.8" />
				<Stop offset="100%" stopColor={themes.colors.black_300} />
			</LinearGradient>
		</Defs>
	);
}
