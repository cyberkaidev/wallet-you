import React from 'react';
import { Platform } from 'react-native';
import { ButtonTitleGhost } from '../button-title-ghost';
import { Text } from '../text';
import { CenterTitle, HeaderSwiperOptionsContainer } from './styles';
import { HeaderSwiperOptionsProps } from './types';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { themes } from '@src/themes';

export function HeaderSwiperOptions({
	title,
	onAction,
	disableAction = false,
}: HeaderSwiperOptionsProps) {
	const navigation = useNavigation();
	const { t } = useTranslation();

	React.useEffect(() => {
		if (Platform.OS === 'android') setStatusBarBackgroundColor('black', true);
		return () => {
			if (Platform.OS === 'android') setStatusBarBackgroundColor(themes.colors.black_300, true);
		};
	}, []);

	return (
		<HeaderSwiperOptionsContainer testID="idHeaderSwiperOptions">
			<CenterTitle>
				<Text size="XL" weight="medium">
					{title}
				</Text>
			</CenterTitle>
			<ButtonTitleGhost
				testID="idButtonLeft"
				title={t('cancel')}
				size="small"
				onPress={() => navigation.goBack()}
				marginL={themes.spaces.space_10}
			/>
			<ButtonTitleGhost
				testID="idButtonRight"
				title={t('change')}
				size="small"
				disabled={disableAction}
				onPress={onAction}
				marginR={themes.spaces.space_10}
			/>
		</HeaderSwiperOptionsContainer>
	);
}
