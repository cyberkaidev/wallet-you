import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconChart({ color = colors.white, porcentSize = '6%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 24 24" fill="none">
			<Path
				d="M0.405974 19.5711C0.135325 19.2852 0 18.9553 0 18.5814C0 18.2076 0.135325 17.8777 0.405974 17.5918L7.05771 10.5649C7.53655 10.0591 8.12989 9.80619 8.83775 9.80619C9.5456 9.80619 10.1389 10.0591 10.6178 10.5649L13.8344 13.9629L21.8289 4.42887C22.0579 4.14296 22.3546 4 22.7189 4C23.0833 4 23.3904 4.13196 23.6402 4.39588C23.8692 4.6378 23.9889 4.92921 23.9993 5.2701C24.0097 5.611 23.9004 5.9134 23.6714 6.17732L15.5832 15.8103C15.1043 16.3821 14.511 16.6845 13.8031 16.7175C13.0953 16.7505 12.4811 16.4921 11.9606 15.9423L8.83775 12.6433L2.2797 19.5711C2.00905 19.857 1.69676 20 1.34284 20C0.988912 20 0.676624 19.857 0.405974 19.5711Z"
				fill={color}
			/>
		</Svg>
	);
}
