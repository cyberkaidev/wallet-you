import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { themes } from '@/themes';

import { IconProps } from './types';

export function IconBitcoin({ size = 25 }: Omit<IconProps, 'color'>) {
	return (
		<Svg width={size} height={size} viewBox="0 0 72 72" fill="none">
			<Path
				d="M70.9229 44.7086C66.1143 63.9945 46.5786 75.7315 27.2882 70.9222C8.0059 66.1142 -3.73245 46.5794 1.07827 27.2951C5.88476 8.00709 25.4205 -3.73082 44.7049 1.07724C63.9938 5.8853 75.7315 25.4221 70.9223 44.7089L70.9227 44.7086H70.9229Z"
				fill={themes.colors.dark_grey}
			/>
			<Path
				d="M51.876 30.8712C52.5926 26.0804 48.9448 23.5051 43.9567 21.7872L45.5749 15.2976L41.624 14.3133L40.0488 20.632C39.0101 20.373 37.9435 20.1289 36.8834 19.887L38.47 13.5265L34.5217 12.5422L32.9026 19.0297C32.0431 18.834 31.1989 18.6406 30.3799 18.4368L30.3844 18.4164L24.9361 17.056L23.8851 21.2753C23.8851 21.2753 26.8163 21.9471 26.7546 21.9885C28.3545 22.3878 28.6438 23.4467 28.5957 24.2861L26.7525 31.6792C26.8626 31.7072 27.0055 31.7477 27.1632 31.811C27.0314 31.7783 26.8911 31.7426 26.7456 31.7077L24.162 42.0645C23.9665 42.5505 23.4702 43.2799 22.3516 43.0029C22.3912 43.0603 19.4801 42.2864 19.4801 42.2864L17.5186 46.8083L22.6599 48.0899C23.6164 48.3297 24.5537 48.5806 25.4768 48.8166L23.8419 55.3806L27.7881 56.365L29.4072 49.8706C30.4853 50.1633 31.5315 50.4332 32.5557 50.6876L30.9421 57.1514L34.8932 58.1357L36.5279 51.584C43.2649 52.8589 48.3306 52.3449 50.4629 46.2519C52.181 41.3464 50.3773 38.5169 46.833 36.6717C49.4145 36.0764 51.359 34.3787 51.8774 30.8717L51.8762 30.8708L51.876 30.8712ZM42.8492 43.5276C41.6283 48.4332 33.3679 45.7814 30.6898 45.1164L32.8593 36.4202C35.5373 37.0887 44.1253 38.4116 42.8494 43.5276H42.8492ZM44.0711 30.8001C42.9573 35.2622 36.0821 32.9953 33.8519 32.4394L35.8188 24.5525C38.0491 25.1084 45.2314 26.1458 44.0715 30.8001H44.0711Z"
				fill={themes.colors.white}
			/>
		</Svg>
	);
}
