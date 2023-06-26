import styled from 'styled-components/native';

import { themes } from '@/themes';

import { IndicatorProps } from './types';

export const TabBarContainer = styled.View`
	background-color: ${themes.colors.black_200};
`;

export const SafeArea = styled.SafeAreaView``;

export const Touch = styled.TouchableOpacity`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Indicator = styled.View<IndicatorProps>`
	background-color: ${({ isFocused }) => (isFocused ? themes.colors.purple_200 : 'transparent')};
	width: 70px;
	height: 30px;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
`;

export const ButtonsContainer = styled.View`
	height: 65px;
	width: 100%;
	flex-direction: row;
`;
