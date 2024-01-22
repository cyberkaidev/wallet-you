import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconArrowDownLeft({ color = colors.white, porcentSize = '6%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 18 18" fill="none">
			<Path
				d="M16.0615 -1.69466e-07L18 1.93846L4.70769 15.2308L16.6154 15.2308L16.6154 18L0 18L1.45256e-06 1.38461L2.76923 1.38461L2.76923 13.2923L16.0615 -1.69466e-07Z"
				fill={color}
			/>
		</Svg>
	);
}
