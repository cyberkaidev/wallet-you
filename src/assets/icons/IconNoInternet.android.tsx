import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconNoInternet({ color = colors.white, porcentSize = '6%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 50 50" fill="none">
			<Path
				d="M41.1458 47.0833L21.5625 27.3958C19.9306 27.7778 18.4115 28.3507 17.0052 29.1146C15.599 29.8785 14.3403 30.8333 13.2292 31.9792L8.85417 27.5C9.96528 26.3889 11.1632 25.4167 12.4479 24.5833C13.7326 23.75 15.1042 23.0208 16.5625 22.3958L11.875 17.7083C10.4514 18.4375 9.12326 19.2448 7.89062 20.1302C6.65799 21.0156 5.48611 22.0139 4.375 23.125L0 18.6458C1.11111 17.5347 2.26562 16.5365 3.46354 15.651C4.66146 14.7656 5.9375 13.9236 7.29167 13.125L2.91667 8.75L5.83333 5.83334L44.1667 44.1667L41.1458 47.0833ZM25 43.75C23.5417 43.75 22.309 43.2379 21.3021 42.2136C20.2951 41.1892 19.7917 39.9653 19.7917 38.5417C19.7917 37.0833 20.2951 35.8507 21.3021 34.8438C22.309 33.8368 23.5417 33.3333 25 33.3333C26.4583 33.3333 27.691 33.8368 28.6979 34.8438C29.7049 35.8507 30.2083 37.0833 30.2083 38.5417C30.2083 39.9653 29.7049 41.1892 28.6979 42.2136C27.691 43.2379 26.4583 43.75 25 43.75ZM37.2917 31.3542L26.7708 20.8333C29.5833 21.1111 32.2135 21.8229 34.6615 22.9688C37.1094 24.1146 39.2708 25.625 41.1458 27.5L37.2917 31.3542ZM45.625 23.125C42.9514 20.4514 39.8524 18.3594 36.3281 16.849C32.8038 15.3385 29.0278 14.5833 25 14.5833C24.2708 14.5833 23.5677 14.6094 22.8906 14.6615C22.2135 14.7135 21.5278 14.7917 20.8333 14.8958L15.5208 9.58334C17.0486 9.16667 18.6024 8.85417 20.1823 8.64584C21.7622 8.4375 23.3681 8.33334 25 8.33334C29.9306 8.33334 34.5312 9.25348 38.8021 11.0938C43.0729 12.934 46.8056 15.4514 50 18.6458L45.625 23.125Z"
				fill={color}
			/>
		</Svg>
	);
}
