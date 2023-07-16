import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import { useAppSettings } from '@/stores';
import { themes } from '@/themes';

import { FieldAreaProps } from './types';

const { colors, spaces, font_sizes, border_radius, width } = themes;

const { isTablet } = useAppSettings.getState();

export const FieldArea = styled.TextInput<FieldAreaProps>`
	width: 100%;
	max-width: ${width.max_width};
	align-self: center;
	background-color: ${colors.black_000};
	border-radius: ${border_radius.radius_10};
	color: ${colors.white};
	font-size: ${wp(font_sizes.M)}px;
	font-family: 'Inter-Regular';
	height: ${hp('15%')}px;
	padding: ${spaces.space_10};
	${({ isFocused }) =>
		isFocused && `border: ${isTablet ? '3px' : '1px'} solid ${colors.light_cyan};`}
`;
