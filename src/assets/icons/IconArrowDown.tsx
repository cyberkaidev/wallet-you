import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconArrowDown({ color = colors.white, size = 25 }: IconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.62336 10.2273C0.72679 10.2273 -2.09808e-05 10.9541 -2.09808e-05 11.8506V23.3766C-2.09808e-05 24.2732 0.72679 25 1.62336 25H13.1493C14.0459 25 14.7727 24.2732 14.7727 23.3766C14.7727 22.4801 14.0459 21.7532 13.1493 21.7532H3.24673V11.8506C3.24673 10.9541 2.51992 10.2273 1.62336 10.2273Z"
				fill={color}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24.5245 0.475476C23.8906 -0.158492 22.8627 -0.158492 22.2287 0.475476L3.07288 19.6313C2.43891 20.2653 2.43891 21.2932 3.07288 21.9271C3.70685 22.5611 4.73471 22.5611 5.36868 21.9271L24.5245 2.77128C25.1585 2.13731 25.1585 1.10944 24.5245 0.475476Z"
				fill={color}
			/>
		</Svg>
	);
}
