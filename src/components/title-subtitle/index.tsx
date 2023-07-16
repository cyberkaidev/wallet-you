import React from 'react';

import { themes } from '@/themes';

import { SkeletonLoading } from '../skeleton-loading';
import { Text } from '../text';
import { LoadingContainer, TitleSubtitleContainer } from './styles';
import { TitleSubtitleProps } from './types';

export function TitleSubtitle({
	title,
	subTitle,
	isLoading = false,
	marginB,
	marginT,
}: TitleSubtitleProps) {
	return (
		<TitleSubtitleContainer
			testID="idTitleSubtitle"
			marginB={marginB ?? '0px'}
			marginT={marginT ?? '0px'}
		>
			<Text size="XL" weight="medium">
				{title}
			</Text>
			{isLoading && (
				<LoadingContainer>
					<SkeletonLoading heightPorcent="4%" radius={5} />
				</LoadingContainer>
			)}
			{!isLoading && (
				<Text size="M" weight="medium" color={themes.colors.light_grey}>
					{subTitle}
				</Text>
			)}
		</TitleSubtitleContainer>
	);
}
