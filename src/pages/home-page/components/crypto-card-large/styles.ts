import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import { themes } from '@/themes';

const { colors, border_radius, spaces } = themes;

export const CryptoCardLargeContainer = styled.View`
	width: auto;
	height: ${hp('28%')}px;
	max-height: 450px;
	border-radius: ${border_radius.radius_10};
	padding: ${spaces.space_15};
	background-color: ${colors.black_000};
	position: relative;
`;

export const Row = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const PriceContainer = styled.View`
	position: absolute;
	padding-left: ${spaces.space_15};
	justify-content: center;
	height: ${hp('28%')}px;
`;
