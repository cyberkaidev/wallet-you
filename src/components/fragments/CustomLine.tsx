import React from 'react';
import { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { CustomLineProps } from '@/types/ChartKitType';

export function CustomLine({ line, isActive }: CustomLineProps) {
	return (
		<Path
			key="line"
			d={line}
			stroke={isActive ? colors.dark_cyan : colors.light_cyan}
			strokeWidth={3}
			fill="none"
		/>
	);
}
