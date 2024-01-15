import React from 'react';
import { Text as TextContainer } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { schemeText } from '@/functions/schemeText';
import { colors } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { TextProps } from '@/types/TextType';

export function Text({
	children,
	weight,
	size,
	color = colors.white,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: TextProps) {
	const { isTablet } = useAppSettings(state => state);

	const { onFontFamily, onFontSize } = React.useMemo(() => {
		return schemeText({
			weight: weight ?? 'regular',
			size: size ?? 's',
			isTablet: isTablet,
		});
	}, [weight, size]);

	return (
		<TextContainer
			testID="idText"
			style={{
				fontSize: wp(onFontSize()),
				fontFamily: onFontFamily(),
				color: color,
				marginTop: marginT,
				marginBottom: marginB,
				marginRight: marginR,
				marginLeft: marginL,
			}}
		>
			{children}
		</TextContainer>
	);
}
