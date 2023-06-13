import React from 'react';
import { Text } from '../text';
import { ButtonTitleGhostContainer } from './styles';
import { themes } from '@src/themes';
import { ButtonTitleGhostProps } from './types';
import { ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';

export function ButtonTitleGhost({
	testID = 'idButtonTitleGhost',
	title,
	disabled = false,
	onPress,
	size = 'large',
	loading = false,
	marginT,
	marginB,
	marginR,
	marginL,
}: ButtonTitleGhostProps) {
	const { t } = useTranslation();

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
				<Text size={size === 'large' ? 'L' : 'M'} weight="bold" color={themes.colors.purple_100}>
					{title}
				</Text>
			)}
			{loading && (
				<React.Fragment>
					<ActivityIndicator color={themes.colors.purple_100} size="small" />
					<Text
						size={size === 'large' ? 'L' : 'M'}
						marginL={themes.spaces.space_5}
						weight="bold"
						color={themes.colors.purple_100}
					>
						{t('loading')}
					</Text>
				</React.Fragment>
			)}
		</ButtonTitleGhostContainer>
	);
}
