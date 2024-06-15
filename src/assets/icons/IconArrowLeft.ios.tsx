import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconArrowLeft({ color = colors.white, porcentSize = '5%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 20 20" fill="none">
			<Path
				d="M4 9.99559C4.00609 9.78974 4.04871 9.60153 4.12785 9.43097C4.207 9.2604 4.32877 9.09572 4.49315 8.93692L13.6438 0.379356C13.9056 0.126452 14.2283 0 14.6119 0C14.8676 0 15.0989 0.0588149 15.3059 0.176445C15.519 0.294074 15.6865 0.452875 15.8082 0.652845C15.9361 0.852816 16 1.07631 16 1.32333C16 1.68799 15.8569 2.00853 15.5708 2.28496L7.2968 9.98677L15.5708 17.6974C15.8569 17.9797 16 18.3002 16 18.659C16 18.9119 15.9361 19.1384 15.8082 19.3383C15.6865 19.5383 15.519 19.6971 15.3059 19.8147C15.0989 19.9382 14.8676 20 14.6119 20C14.2283 20 13.9056 19.8706 13.6438 19.6118L4.49315 11.0543C4.32268 10.8955 4.19787 10.7308 4.11872 10.5602C4.03957 10.3838 4 10.1956 4 9.99559Z"
				fill={color}
			/>
		</Svg>
	);
}
