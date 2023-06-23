import styled from 'styled-components/native';

import { themes } from '@/themes';

import { SafeAreaProps, ScrollViewPageContainerProps } from './types';

export const ScrollViewPageContainer = styled.ScrollView<ScrollViewPageContainerProps>`
	flex: 1;
	padding-left: ${({ horizontalPadding }) => horizontalPadding};
	padding-right: ${({ horizontalPadding }) => horizontalPadding};
	padding-top: ${themes.spaces.space_25};
`;

export const SafeArea = styled.SafeAreaView<SafeAreaProps>`
	height: ${({ height }) => height};
	background-color: ${themes.colors.black_300};
	padding-bottom: ${({ paddingB }) => paddingB};
`;
