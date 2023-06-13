import { themes } from '@src/themes';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const ChartBitcoinContainer = styled.View`
	margin-top: ${themes.spaces.space_25};
	width: 100%;
`;

export const FailedContainer = styled.View`
	height: ${wp('35%')}px;
	width: ${wp('100%')}px;
	justify-content: center;
	padding: 0 ${themes.spaces.space_15};
`;
