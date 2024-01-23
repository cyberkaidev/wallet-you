import React from 'react';
import { Dimensions } from 'react-native';
import { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { CustomLineProps } from '@/types/CustomLineType';

export function CustomLine({ line, isActive }: CustomLineProps) {
	const apx = (size = 0) => {
		const width = Dimensions.get('window').width;
		return (width / 750) * size;
	};

	return (
		<Path
			key="line"
			d={line}
			stroke={isActive ? colors.dark_cyan : colors.light_cyan}
			strokeWidth={apx(5)}
			fill="none"
		/>
	);
}
