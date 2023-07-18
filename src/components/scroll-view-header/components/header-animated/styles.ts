import Constants from 'expo-constants';
import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import { themes } from '@/themes';

const HEIGHT_STATUS_BAR = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;
const HEIGHT_FIRST_ITEM = hp('8%');
const HEIGHT_SECOND_ITEM = hp('8%') + HEIGHT_FIRST_ITEM + HEIGHT_STATUS_BAR;

export const HeaderAnimatedContainer = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${themes.colors.black_000};
	z-index: 99999999;
`;

export const SafeArea = styled.SafeAreaView``;

export const FirstItem = styled.View`
	height: ${HEIGHT_FIRST_ITEM}px;
	z-index: 2;
	padding: 0 ${themes.spaces.space_15};
	justify-content: center;
	background-color: ${themes.colors.black_000};
`;

export const SecondtItem = styled(Animated.View)`
	position: absolute;
	top: 0;
	height: ${HEIGHT_SECOND_ITEM}px;
	width: 100%;
	z-index: 1;
	padding: 0 ${themes.spaces.space_15};
	justify-content: flex-end;
	background-color: ${themes.colors.black_000};
`;

export const OpacityAnimation = styled(Animated.View)``;
