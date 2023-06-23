import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import { themes } from '@/themes';

import { FieldAreaProps } from './types';

export const FieldArea = styled.TextInput<FieldAreaProps>`
	background-color: ${themes.colors.black_200};
	border-radius: ${themes.border_radius.radius_10};
	color: ${themes.colors.white};
	font-size: ${wp(themes.font_sizes.M)}px;
	font-family: 'Inter-Regular';
	height: ${hp('15%')}px;
	padding: ${themes.spaces.space_10};
	${({ isFocused }) => isFocused && `border: 1px solid ${themes.colors.purple_100};`}
`;
