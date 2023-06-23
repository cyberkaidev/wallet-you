import styled from 'styled-components/native';

import { themes } from '@/themes';

export const HeaderSwiperOptionsContainer = styled.View`
	background-color: ${themes.colors.black_300};
	padding: ${themes.spaces.space_10} 0;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

export const CenterTitle = styled.View`
	position: absolute;
	align-items: center;
	width: 100%;
`;
