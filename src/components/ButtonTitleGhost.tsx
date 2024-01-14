import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

import { colors, spaces } from '@/helpers/themes';
import { useAppSettings } from '@/stores';
import { ButtonTitleGhostProps } from '@/types/ButtonTitleGhostType';

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
	const { isTablet } = useAppSettings(state => state);

	return (
		<TouchableOpacity
			testID={testID}
			onPress={() => {
				if (!disabled || loading) onPress();
			}}
			disabled={disabled || loading}
			style={[
				styles.container,
				{
					marginTop: marginT,
					marginBottom: marginB,
					marginRight: marginR,
					marginLeft: marginL,
					opacity: disabled ? 0.5 : 1,
				},
			]}
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
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
