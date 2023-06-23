import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { themes } from '@/themes';

import { schemeText } from './functions';
import { TextContainer } from './styles';
import { TextProps } from './types';

export function Text({
	children,
	weight,
	size,
	color,
	marginT,
	marginB,
	marginR,
	marginL,
}: TextProps) {
	const { onFontFamily, onFontSize } = schemeText({
		weight: weight ?? 'regular',
		size: size ?? 'S',
	});

	return (
		<TextContainer
			testID="idText"
			fontSize={wp(onFontSize())}
			fontFamily={onFontFamily()}
			color={color ?? themes.colors.white}
			marginT={marginT ?? '0px'}
			marginB={marginB ?? '0px'}
			marginR={marginR ?? '0px'}
			marginL={marginL ?? '0px'}
		>
			{children}
		</TextContainer>
	);
}
