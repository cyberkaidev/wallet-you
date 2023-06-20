import { themes } from '@src/themes';
import styled from 'styled-components/native';
import { ScrollViewHeaderPageContainerProps } from './types';
import Animated from 'react-native-reanimated';

export const ScrollViewHeaderPageContainer = styled(
	Animated.ScrollView,
)<ScrollViewHeaderPageContainerProps>`
	flex: 1;
	padding-left: ${({ horizontalPadding }) => horizontalPadding};
	padding-right: ${({ horizontalPadding }) => horizontalPadding};
	padding-top: 140px;
	background-color: ${themes.colors.black_300};
`;

export const SafeArea = styled.SafeAreaView`
	background-color: ${themes.colors.black_300};
`;
