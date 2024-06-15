import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconArrowRight({ color = colors.white, porcentSize = '5%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 12 12" fill="none">
			<Path
				d="M4.69071 0.702277C4.80596 0.701885 4.91984 0.727321 5.02397 0.776717C5.1281 0.826112 5.21984 0.898212 5.29245 0.987717L9.01859 5.61647C9.13206 5.75451 9.19409 5.92766 9.19409 6.10635C9.19409 6.28504 9.13206 6.45819 9.01859 6.59622L5.1613 11.225C5.03035 11.3825 4.84218 11.4816 4.63819 11.5004C4.4342 11.5192 4.23109 11.4562 4.07354 11.3253C3.916 11.1943 3.81692 11.0062 3.79811 10.8022C3.77931 10.5982 3.8423 10.3951 3.97325 10.2375L7.42167 6.10249L4.08897 1.96747C3.99463 1.85423 3.93471 1.71634 3.91629 1.57011C3.89787 1.42388 3.92172 1.27543 3.98502 1.14234C4.04832 1.00924 4.14843 0.897059 4.27349 0.819072C4.39855 0.741086 4.54333 0.700555 4.69071 0.702277Z"
				fill={color}
			/>
		</Svg>
	);
}
