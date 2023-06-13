import React from 'react';
import { Path } from 'react-native-svg';
import { CustomLineProps } from './types';
import { apx } from '../../functions';
import { themes } from '@src/themes';

export function CustomLine({ line }: CustomLineProps) {
	return (
		<Path key="line" d={line} stroke={themes.colors.purple_100} strokeWidth={apx(4)} fill="none" />
	);
}
