import Constants from 'expo-constants';
import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { themes } from '@/themes';

import { ScrollViewHeaderPageContainerProps } from './types';

const HEADER_HEIGHT = 115;
const DEFAULT_MARGIN = 25;
const STATUS_BAR = Constants.statusBarHeight;

export const ScrollViewHeaderPageContainer = styled(
	Animated.ScrollView,
)<ScrollViewHeaderPageContainerProps>`
	flex: 1;
	padding-left: ${({ horizontalPadding }) => horizontalPadding};
	padding-right: ${({ horizontalPadding }) => horizontalPadding};
	padding-top: ${(Platform.OS === 'ios' ? STATUS_BAR : 0) + HEADER_HEIGHT + DEFAULT_MARGIN}px;
	background-color: ${themes.colors.black_300};
`;

export const SafeArea = styled.SafeAreaView`
	background-color: ${themes.colors.black_300};
`;
