import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colors } from '@/helpers/themes';
import { SkeletonLoadingProps } from '@/types/SkeletonLoadingType';

export function SkeletonLoading({
	heightPorcent,
	radius,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: SkeletonLoadingProps) {
	return (
		<View
			testID="idSkeletonLoading"
			style={{
				marginTop: marginT,
				marginBottom: marginB,
				marginRight: marginR,
				marginLeft: marginL,
			}}
		>
			<Skeleton
				colorMode="dark"
				radius={radius}
				width="100%"
				height={hp(heightPorcent)}
				backgroundColor={colors.black_000}
				colors={['#303139', '#303139', '#303139', '#303139']}
			/>
		</View>
	);
}
