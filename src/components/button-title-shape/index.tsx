import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native';

import { useAppSettings } from '@/stores';
import { themes } from '@/themes';

import { Text } from '../text';
import { ButtonTitleShapeContainer } from './styles';
import { ButtonTitleShapeProps } from './types';

export function ButtonTitleShape({
	title,
	disabled = false,
	onPress,
	size = 'large',
	loading = false,
	marginT,
	marginB,
	marginR,
	marginL,
}: ButtonTitleShapeProps) {
	const { t } = useTranslation();
	const { colors, spaces, border_radius } = themes;
	const { isTablet } = useAppSettings.getState();

	const LARGE_PADDING_V = isTablet ? spaces.space_20 : spaces.space_15;
	const LARGE_PADDING_H = isTablet ? spaces.space_15 : spaces.space_10;

	return (
		<ButtonTitleShapeContainer
			testID="idButtonTitleShape"
			onPress={() => {
				if (!disabled || loading) onPress();
			}}
			disabled={disabled || loading}
			width={size === 'large' ? '90%' : 'auto'}
			paddingH={size === 'large' ? '0px' : spaces.space_25}
			paddingV={size === 'large' ? LARGE_PADDING_V : LARGE_PADDING_H}
			borderR={size === 'large' ? border_radius.radius_15 : border_radius.radius_10}
			marginT={marginT ?? '0px'}
			marginB={marginB ?? '15px'}
			marginR={marginR ?? '0px'}
			marginL={marginL ?? '0px'}
			isOpacity={disabled}
		>
			{!loading && (
				<Text size={size === 'large' ? 'L' : 'M'} weight="bold" color={colors.black_100}>
					{title}
				</Text>
			)}
			{loading && (
				<React.Fragment>
					<ActivityIndicator color={colors.black_100} size={isTablet ? 'large' : 'small'} />
					<Text
						size={size === 'large' ? 'L' : 'M'}
						marginL={spaces.space_5}
						weight="bold"
						color={colors.black_100}
					>
						{t('loading')}
					</Text>
				</React.Fragment>
			)}
		</ButtonTitleShapeContainer>
	);
}
