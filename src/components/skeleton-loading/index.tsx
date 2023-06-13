import React from 'react';
import { SkeletonLoadingContainer } from './styles';
import { Skeleton } from 'moti/skeleton';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { themes } from '@src/themes';
import { SkeletonLoadingProps } from './types';

export function SkeletonLoading({
	widthPorcent,
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
				colorMode={'dark'}
				radius={radius}
				width={wp(widthPorcent)}
				height={hp(heightPorcent)}
				backgroundColor={themes.colors.black_200}
				colors={['#303139', '#303139', '#303139', '#303139']}
			/>
		</SkeletonLoadingContainer>
	);
}
