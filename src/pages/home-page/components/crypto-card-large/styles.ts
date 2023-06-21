import { themes } from '@src/themes';
import styled from 'styled-components/native';

export const CryptoCardLargeContainer = styled.View`
	width: 100%;
	height: 200px;
	border-radius: ${themes.border_radius.radius_10};
	padding: ${themes.spaces.space_15};
	background-color: ${themes.colors.black_200};
	position: relative;
`;

export const Row = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const PriceContainer = styled.View`
	position: absolute;
	padding-left: ${themes.spaces.space_15};
	justify-content: center;
	height: 200px;
`;
