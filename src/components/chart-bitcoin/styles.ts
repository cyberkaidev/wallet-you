import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import { useAppSettings } from '@/stores';
import { themes } from '@/themes';

const { isTablet } = useAppSettings.getState();

const MARGIN_TOP_CHART = `${hp('5%')}px`;

export const ChartBitcoinContainer = styled.View`
	margin-top: ${isTablet ? MARGIN_TOP_CHART : themes.spaces.space_25};
	width: 100%;
`;

export const FailedContainer = styled.View`
	height: ${wp('35%')}px;
	width: ${wp('100%')}px;
	justify-content: center;
	padding: 0 ${themes.spaces.space_15};
`;
