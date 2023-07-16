import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { themes } from '@/themes';

import { SkeletonLoadingContainer } from './styles';
import { SkeletonLoadingProps } from './types';

export function SkeletonLoading({
	heightPorcent,
	radius,
	marginT,
	marginB,
	marginR,
	marginL,
}: SkeletonLoadingProps) {
	return (
		<SkeletonLoadingContainer
			testID="idSkeletonLoading"
			marginT={marginT ?? '0px'}
			marginB={marginB ?? '0px'}
			marginR={marginR ?? '0px'}
			marginL={marginL ?? '0px'}
		>
			<Skeleton
				colorMode="dark"
				radius={radius}
				width="100%"
				height={hp(heightPorcent)}
				backgroundColor={themes.colors.black_000}
				colors={['#303139', '#303139', '#303139', '#303139']}
			/>
		</SkeletonLoadingContainer>
	);
}
