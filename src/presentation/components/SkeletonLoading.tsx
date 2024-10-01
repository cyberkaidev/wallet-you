import { Skeleton } from "moti/skeleton";
import React from "react";
import { View } from "react-native";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { colors } from "~/presentation/settings/themes";

type Props = {
	heightPorcent: string;
	widthPorcent?: string;
	radius: number;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
};

export function SkeletonLoading({
	heightPorcent,
	widthPorcent,
	radius,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: Props) {
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
				width={widthPorcent ? wp(widthPorcent) : "100%"}
				height={hp(heightPorcent)}
				backgroundColor={colors.black_000}
				colors={["#303139", "#303139", "#303139", "#303139"]}
			/>
		</View>
	);
}
