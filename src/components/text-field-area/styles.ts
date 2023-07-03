import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import { themes } from '@/themes';

import { FieldAreaProps } from './types';

const { colors, spaces, font_sizes, border_radius, width } = themes;

export const FieldArea = styled.TextInput<FieldAreaProps>`
	width: 100%;
	max-width: ${width.max_width};
	align-self: center;
	background-color: ${colors.black_200};
	border-radius: ${border_radius.radius_10};
	color: ${colors.white};
	font-size: ${wp(font_sizes.M)}px;
	font-family: 'Inter-Regular';
	height: ${hp('15%')}px;
	padding: ${spaces.space_10};
	${({ isFocused }) => isFocused && `border: 1px solid ${colors.purple_100};`}
`;
