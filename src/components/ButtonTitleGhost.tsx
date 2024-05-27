import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native';

import { colors, spaces } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { ButtonTitleGhostProps } from '@/types/ButtonTitleGhostType';

import { ButtonTitleGhostPlatform } from './fragments/ButtonTitleGhostPlatform';
import { Text } from './Text';

export function ButtonTitleGhost({
	testID = 'idButtonTitleGhost',
	title,
	disabled = false,
	onPress,
	size = 'large',
	loading = false,
	buttonsWeight = 'bold',
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: ButtonTitleGhostProps) {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings();

	return (
		<ButtonTitleGhostPlatform
			testID={testID}
			onPress={onPress}
			disabled={disabled || loading}
			marginT={marginT}
			marginB={marginB}
			marginR={marginR}
			marginL={marginL}
		>
			{!loading && (
				<Text size={size === 'large' ? 'l' : 'm'} weight={buttonsWeight} color={colors.light_cyan}>
					{title}
				</Text>
			)}
			{loading && (
				<React.Fragment>
					<ActivityIndicator color={colors.light_cyan} size={isTablet ? 'large' : 'small'} />
					<Text
						size={size === 'large' ? 'l' : 'm'}
						marginL={spaces.space_5}
						weight={buttonsWeight}
						color={colors.light_cyan}
					>
						{t('loading')}
					</Text>
				</React.Fragment>
			)}
		</ButtonTitleGhostPlatform>
	);
}
