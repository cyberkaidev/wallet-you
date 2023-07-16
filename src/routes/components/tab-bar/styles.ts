import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import { themes } from '@/themes';

import { IndicatorProps } from './types';

const { colors } = themes;

const HEIGHT_TAB_BAR = hp('8%');

export const TabBarContainer = styled.View`
	background-color: ${colors.black_000};
`;

export const SafeArea = styled.SafeAreaView``;

export const Touch = styled.TouchableOpacity`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Indicator = styled.View<IndicatorProps>`
	background-color: ${({ isFocused }) => (isFocused ? colors.dark_cyan : colors.transparent)};
	width: ${hp('8.5%')}px;
	max-width: 120px;
	height: ${hp('4.5%')}px;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
`;

export const ButtonsContainer = styled.View`
	height: ${HEIGHT_TAB_BAR}px;
	width: 100%;
	flex-direction: row;
`;
