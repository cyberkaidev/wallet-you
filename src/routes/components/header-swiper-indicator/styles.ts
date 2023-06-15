import { themes } from '@src/themes';
import styled from 'styled-components/native';

export const HeaderSwiperIndicatorContainer = styled.View`
	background-color: ${themes.colors.black_300};
`;

export const SafeArea = styled.SafeAreaView`
	padding: ${themes.spaces.space_10} ${themes.spaces.space_15};
	justify-content: center;
	align-items: center;
`;

export const Indicator = styled.View`
	width: 35px;
	height: 5px;
	border-radius: 10px;
	margin-bottom: ${themes.spaces.space_5};
	background-color: ${themes.colors.grey_200};
`;
