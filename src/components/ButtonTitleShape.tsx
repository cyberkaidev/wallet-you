import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native';

import { colors, spaces } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { ButtonTitleShapeProps } from '@/types/ButtonTitleShapeType';

import { ButtonTitleShapePlatform } from './fragments/ButtonTitleShapePlatform';
import { Text } from './Text';

export function ButtonTitleShape({
	testID = 'idButtonTitleShape',
	title,
	disabled = false,
	onPress,
	size = 'large',
	loading = false,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: ButtonTitleShapeProps) {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings.getState();

	return (
		<ButtonTitleShapePlatform
			testID={testID}
			onPress={() => {
				if (!disabled || loading) onPress();
			}}
			disabled={disabled || loading}
			marginT={marginT}
			size={size}
			marginB={marginB}
			marginR={marginR}
			marginL={marginL}
		>
			{!loading && (
				<Text size={size === 'large' ? 'l' : 'm'} weight="bold" color={colors.black_100}>
					{title}
				</Text>
			)}
			{loading && (
				<React.Fragment>
					<ActivityIndicator color={colors.black_100} size={isTablet ? 'large' : 'small'} />
					<Text
						size={size === 'large' ? 'l' : 'm'}
						marginL={spaces.space_5}
						weight="bold"
						color={colors.black_100}
					>
						{t('loading')}
					</Text>
				</React.Fragment>
			)}
		</ButtonTitleShapePlatform>
	);
}
