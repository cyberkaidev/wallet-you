import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { themes } from '@/themes';

import { IconProps } from './types';

export function IconArrowUp({ color = themes.colors.white, size = 25 }: IconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23.3766 14.7727C24.2732 14.7727 25 14.0459 25 13.1494V1.62338C25 0.726813 24.2732 1.69506e-06 23.3766 1.69506e-06H11.8507C10.9541 1.69506e-06 10.2273 0.726813 10.2273 1.62338C10.2273 2.51994 10.9541 3.24675 11.8507 3.24675H21.7533V13.1494C21.7533 14.0459 22.4801 14.7727 23.3766 14.7727Z"
				fill={color}
			/>
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0.475476 24.5245C1.10944 25.1585 2.13731 25.1585 2.77128 24.5245L21.9271 5.36868C22.5611 4.73471 22.5611 3.70685 21.9271 3.07288C21.2932 2.43891 20.2653 2.43891 19.6313 3.07288L0.475476 22.2287C-0.158492 22.8627 -0.158492 23.8906 0.475476 24.5245Z"
				fill={color}
			/>
		</Svg>
	);
}
