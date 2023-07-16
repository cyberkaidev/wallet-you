import React from 'react';

import { themes } from '@/themes';

import { SkeletonLoading } from '../skeleton-loading';
import { Text } from '../text';
import { TitleSubtitleContainer } from './styles';
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
			{isLoading && <SkeletonLoading widthPorcent="60%" heightPorcent="4%" radius={5} />}
			{!isLoading && (
				<Text size="M" weight="medium" color={themes.colors.light_grey}>
					{subTitle}
				</Text>
			)}
		</TitleSubtitleContainer>
	);
}
