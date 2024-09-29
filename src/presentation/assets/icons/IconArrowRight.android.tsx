import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Svg, { Path } from "react-native-svg";

import { colors } from "~/presentation/settings/themes";
import { IconProps } from "~/shared/Styles";

export function IconArrowRight({ color = colors.white, porcentSize = "5%" }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 24 24" fill="none">
			<Path d="M7 23L18 12L7 1V23Z" fill={color} />
		</Svg>
	);
}
