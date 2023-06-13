import React from 'react';
import { SafeArea, ScrollViewPageContainer } from './styles';
import { ScrollViewPageProps } from './types';
import { themes } from '@src/themes';

export function ScrollViewPage({
	children,
	contentHeight,
	enabledHorizontalPadding = true,
	enabledPaddingB = true,
}: ScrollViewPageProps) {
	return (
		<ScrollViewPageContainer
			testID="idScrollViewPage"
			contentContainerStyle={{ height: contentHeight }}
			horizontalPadding={enabledHorizontalPadding ? themes.spaces.space_15 : '0px'}
			alwaysBounceVertical
			endFillColor="transparent"
			overScrollMode="never"
		>
			<SafeArea
				paddingB={enabledPaddingB ? themes.spaces.space_25 : '0px'}
				height={contentHeight ?? 'auto'}
			>
				{children}
			</SafeArea>
		</ScrollViewPageContainer>
	);
}
