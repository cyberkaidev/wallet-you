import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconArrowLeft({ color = colors.white, porcentSize = '6%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 20 20" fill="none">
			<Path
				d="M4.78125 11.25L11.7812 18.25L10 20L0 10L10 0L11.7812 1.75L4.78125 8.75H20V11.25H4.78125Z"
				fill={color}
			/>
		</Svg>
	);
}
