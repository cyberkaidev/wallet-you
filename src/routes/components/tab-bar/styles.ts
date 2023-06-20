import { themes } from '@src/themes';
import styled from 'styled-components/native';
import { IndicatorProps } from './types';

export const TabBarContainer = styled.View`
	background-color: ${themes.colors.black_200};
	border-top-width: 0.5px;
	border-style: solid;
	border-top-color: ${themes.colors.grey_300};
`;

export const SafeArea = styled.SafeAreaView`
	height: 70px;
	width: 100%;
	flex-direction: row;
`;

export const Touch = styled.TouchableOpacity`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Indicator = styled.View<IndicatorProps>`
	background-color: ${({ isFocused }) => (isFocused ? themes.colors.purple_200 : 'transparent')};
	width: 70px;
	height: 35px;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
`;
