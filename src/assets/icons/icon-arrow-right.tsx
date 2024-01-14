import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconArrowRight({ color = colors.white, size = 25 }: IconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
			<Path
				d="M9.77228 1.46308C10.0124 1.46226 10.2496 1.51525 10.4666 1.61816C10.6835 1.72107 10.8746 1.87128 11.0259 2.05774L18.7887 11.701C19.0251 11.9886 19.1543 12.3493 19.1543 12.7216C19.1543 13.0938 19.0251 13.4546 18.7887 13.7421L10.7527 23.3854C10.4799 23.7136 10.0879 23.92 9.66287 23.9592C9.23788 23.9984 8.81473 23.8671 8.48651 23.5943C8.1583 23.3215 7.95189 22.9295 7.91271 22.5045C7.87353 22.0795 8.00477 21.6564 8.27758 21.3281L15.4618 12.7135L8.51866 4.0989C8.32213 3.86298 8.19728 3.57571 8.1589 3.27106C8.12052 2.96642 8.17021 2.65716 8.3021 2.37987C8.43398 2.10258 8.64253 1.86887 8.90307 1.7064C9.16362 1.54393 9.46525 1.45949 9.77228 1.46308Z"
				fill={color}
			/>
		</Svg>
	);
}
