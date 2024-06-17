import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconArrowUpRight({ color = colors.white, porcentSize = '5%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 18 18" fill="none">
			<Path
				d="M1.93846 18L0 16.0615L13.2923 2.76923H1.38462V0H18V16.6154H15.2308V4.70769L1.93846 18Z"
				fill={color}
			/>
		</Svg>
	);
}
