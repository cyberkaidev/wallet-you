import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconArrowLeft({ color = colors.white, porcentSize = '6%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 24 24" fill="none">
			<Path
				d="M4.70605 9.97242C4.70605 10.118 4.73286 10.2539 4.78648 10.3803C4.84009 10.5067 4.92052 10.6235 5.02775 10.7307L14.1385 19.6347C14.3453 19.8415 14.5942 19.9448 14.8853 19.9448C15.0844 19.9448 15.2625 19.8989 15.4195 19.8069C15.5765 19.7151 15.7029 19.5907 15.7987 19.4336C15.8944 19.2766 15.9423 19.0985 15.9423 18.8994C15.9423 18.616 15.8389 18.367 15.6321 18.1526L7.26809 9.97242L15.6321 1.79228C15.8389 1.57782 15.9423 1.32889 15.9423 1.0455C15.9423 0.846354 15.8944 0.668275 15.7987 0.511259C15.7029 0.354243 15.5765 0.22978 15.4195 0.137868C15.2625 0.0459561 15.0844 0 14.8853 0C14.5942 0 14.3453 0.099571 14.1385 0.298713L5.02775 9.21415C4.92052 9.32138 4.84009 9.43819 4.78648 9.56456C4.73286 9.69095 4.70605 9.8269 4.70605 9.97242Z"
				fill={color}
			/>
		</Svg>
	);
}
