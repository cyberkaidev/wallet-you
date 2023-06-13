import React from 'react';
import { Text } from '../text';
import { TitleSubtitleContainer } from './styles';
import { themes } from '@src/themes';
import { TitleSubtitleProps } from './types';
import { SkeletonLoading } from '../skeleton-loading';

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
				<Text size="M" weight="medium" color={themes.colors.grey_300}>
					{subTitle}
				</Text>
			)}
		</TitleSubtitleContainer>
	);
}
