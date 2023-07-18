import React from 'react';
import { Path } from 'react-native-svg';

import { themes } from '@/themes';

import { apx } from '../../functions';
import { CustomLineProps } from './types';

export function CustomLine({ line }: CustomLineProps) {
	return (
		<Path key="line" d={line} stroke={themes.colors.light_cyan} strokeWidth={apx(5)} fill="none" />
	);
}
