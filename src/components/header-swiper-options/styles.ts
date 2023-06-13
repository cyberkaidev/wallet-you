import { themes } from '@src/themes';
import styled from 'styled-components/native';

export const HeaderSwiperOptionsContainer = styled.View`
	background-color: ${themes.colors.black_300};
`;

export const SafeArea = styled.SafeAreaView`
	padding: ${themes.spaces.space_10} ${themes.spaces.space_10};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
