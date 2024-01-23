import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconNoInternet({ color = colors.white, porcentSize = '6%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 50 50" fill="none">
			<Path
				d="M9.33567 9.08622C7.51195 10.0126 5.82575 11.0764 4.27704 12.2777C2.72833 13.479 1.37502 14.7672 0.217108 16.1423C0.0723694 16.3304 0 16.533 0 16.7501C0 16.9673 0.0940803 17.1771 0.282241 17.3798L3.30006 20.3759C3.50268 20.593 3.7415 20.6979 4.01651 20.6907C4.29151 20.6834 4.53034 20.5713 4.73297 20.3542C7.49748 17.4304 10.6238 15.2666 14.1121 13.8626L9.33567 9.08622ZM24.0556 11.8218C24.2148 11.7928 24.3812 11.7711 24.5549 11.7567C24.7286 11.7422 24.8951 11.7349 25.0542 11.7349C29.1215 11.8073 32.8449 12.5889 36.2244 14.0797C39.6041 15.5705 42.6256 17.6837 45.2888 20.4193C45.4914 20.6219 45.7267 20.7196 45.9945 20.7124C46.2621 20.7051 46.4974 20.593 46.7001 20.3759L49.6961 17.3798C49.8987 17.1771 50 16.9673 50 16.7501C50 16.533 49.9277 16.3304 49.783 16.1423C48.0316 14.0725 45.8641 12.2126 43.2806 10.5626C40.697 8.91253 37.842 7.60988 34.7156 6.65461C31.5893 5.69933 28.3472 5.2217 24.9891 5.2217C23.9036 5.2217 22.8036 5.27959 21.6891 5.39537C20.5747 5.51117 19.4023 5.69209 18.172 5.93814L24.0556 11.8218ZM19.0187 18.7258C16.891 19.3048 14.9552 20.137 13.211 21.2226C11.4669 22.3081 10.0159 23.5384 8.85804 24.9135C8.69881 25.1016 8.62644 25.3042 8.64092 25.5213C8.65539 25.7385 8.7567 25.9411 8.94487 26.1292L12.3101 29.4726C12.5416 29.6897 12.7913 29.7875 13.0591 29.7659C13.3268 29.7441 13.5693 29.6174 13.7864 29.3859C14.6548 28.4305 15.668 27.5874 16.8259 26.8566C17.9838 26.1256 19.2358 25.5466 20.5819 25.1196C21.9279 24.6926 23.3102 24.4719 24.7285 24.4575L19.0187 18.7258ZM39.7091 27.4753L41.0552 26.1292C41.2434 25.9411 41.3411 25.7385 41.3482 25.5213C41.3555 25.3042 41.2868 25.1016 41.1421 24.9135C40.0565 23.5529 38.609 22.3154 36.7998 21.2009C34.9906 20.0864 33.0583 19.2758 31.0031 18.7693L39.7091 27.4753ZM25.0109 30.58C23.4622 30.58 22.0474 30.9346 20.7664 31.6438C19.4855 32.353 18.4976 33.178 17.8029 34.1189C17.6871 34.2926 17.6509 34.4735 17.6943 34.6615C17.7378 34.8498 17.8391 35.0235 17.9983 35.1827L23.2741 40.2631C23.7083 40.6683 24.0483 40.9432 24.2944 41.0879C24.5405 41.2327 24.7794 41.3051 25.0109 41.3051C25.2569 41.3051 25.503 41.2327 25.749 41.0879C25.995 40.9432 26.3352 40.6683 26.7694 40.2631L32.0235 35.1827C32.1972 35.0235 32.2985 34.8317 32.3274 34.6073C32.3563 34.3829 32.2984 34.1767 32.1538 33.9886C31.4446 33.0768 30.4604 32.2807 29.2012 31.6004C27.9419 30.9201 26.5452 30.58 25.0109 30.58ZM43.2915 39.3729C43.6244 39.6913 44.0224 39.8505 44.4856 39.8505C44.9488 39.8505 45.3395 39.6913 45.6579 39.3729C45.9764 39.04 46.1392 38.642 46.1463 38.1789C46.1536 37.7157 45.9908 37.3248 45.6579 37.0063L9.16197 0.488724C8.82907 0.170299 8.42742 0.00746791 7.95702 0.000230967C7.48662 -0.00700598 7.09222 0.155825 6.77379 0.488724C6.45536 0.80715 6.29614 1.20518 6.29614 1.68282C6.29614 2.16047 6.45536 2.55126 6.77379 2.8552L43.2915 39.3729Z"
				fill={color}
			/>
		</Svg>
	);
}
