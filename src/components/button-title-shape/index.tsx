import React from 'react';
import { Text } from '../text';
import { ButtonTitleShapeContainer } from './styles';
import { themes } from '@src/themes';
import { ButtonTitleShapeProps } from './types';
import { ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';

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

	return (
		<ButtonTitleShapeContainer
			testID="idButtonTitleShape"
			onPress={() => {
				if (!disabled || loading) onPress();
			}}
			disabled={disabled || loading}
			width={size === 'large' ? '90%' : 'auto'}
			paddingH={size === 'large' ? '0px' : themes.spaces.space_25}
			paddingV={size === 'large' ? themes.spaces.space_15 : themes.spaces.space_10}
			borderR={size === 'large' ? themes.border_radius.radius_15 : themes.border_radius.radius_10}
			marginT={marginT ?? '0px'}
			marginB={marginB ?? '15px'}
			marginR={marginR ?? '0px'}
			marginL={marginL ?? '0px'}
			isOpacity={disabled}
		>
			{!loading && (
				<Text size={size === 'large' ? 'L' : 'M'} weight="bold" color={themes.colors.black_300}>
					{title}
				</Text>
			)}
			{loading && (
				<React.Fragment>
					<ActivityIndicator color={themes.colors.black_300} size="small" />
					<Text
						size={size === 'large' ? 'L' : 'M'}
						marginL={themes.spaces.space_5}
						weight="bold"
						color={themes.colors.black_300}
					>
						{t('loading')}
					</Text>
				</React.Fragment>
			)}
		</ButtonTitleShapeContainer>
	);
}
