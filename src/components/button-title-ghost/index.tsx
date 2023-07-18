import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native';

import { useAppSettings } from '@/stores';
import { themes } from '@/themes';

import { Text } from '../text';
import { ButtonTitleGhostContainer } from './styles';
import { ButtonTitleGhostProps } from './types';

export function ButtonTitleGhost({
	testID = 'idButtonTitleGhost',
	title,
	disabled = false,
	onPress,
	size = 'large',
	loading = false,
	buttonsWeight = 'bold',
	marginT,
	marginB,
	marginR,
	marginL,
}: ButtonTitleGhostProps) {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings.getState();

	return (
		<ButtonTitleGhostContainer
			testID={testID}
			onPress={() => {
				if (!disabled || loading) onPress();
			}}
			disabled={disabled || loading}
			marginT={marginT ?? '0px'}
			marginB={marginB ?? '0px'}
			marginR={marginR ?? '0px'}
			marginL={marginL ?? '0px'}
			isOpacity={disabled}
		>
			{!loading && (
				<Text
					size={size === 'large' ? 'L' : 'M'}
					weight={buttonsWeight}
					color={themes.colors.light_cyan}
				>
					{title}
				</Text>
			)}
			{loading && (
				<React.Fragment>
					<ActivityIndicator color={themes.colors.light_cyan} size={isTablet ? 'large' : 'small'} />
					<Text
						size={size === 'large' ? 'L' : 'M'}
						marginL={themes.spaces.space_5}
						weight={buttonsWeight}
						color={themes.colors.light_cyan}
					>
						{t('loading')}
					</Text>
				</React.Fragment>
			)}
		</ButtonTitleGhostContainer>
	);
}
