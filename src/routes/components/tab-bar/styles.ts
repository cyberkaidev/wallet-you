import { themes } from '@src/themes';
import styled from 'styled-components/native';

export const TabBarContainer = styled.View`
	background-color: ${themes.colors.black_300};
	border-top-width: 1px;
	border-style: solid;
	border-top-color: ${themes.colors.black_200};
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
