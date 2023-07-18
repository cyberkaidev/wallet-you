import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import { themes } from '@/themes';

export const SelectListContainer = styled.View``;

export const ItemButton = styled.TouchableOpacity`
	padding: ${themes.spaces.space_15} 0;
	flex-direction: row;
	align-items: center;
`;

export const BorderSelect = styled.View`
	width: ${wp('4%')}px;
	height: ${wp('4%')}px;
	align-items: center;
	justify-content: center;
	border-radius: 40px;
	border: 2px solid ${themes.colors.light_cyan};
`;

export const Selected = styled.View`
	width: ${wp('2%')}px;
	height: ${wp('2%')}px;
	border-radius: 20px;
	background-color: ${themes.colors.light_cyan};
`;
