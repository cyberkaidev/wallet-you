import React from 'react';
import { useTranslation } from 'react-i18next';

import { themes } from '@/themes';

import { FieldArea } from './styles';
import { TextFieldAreaProps } from './types';

export function TextFieldArea({ value, onChangeText }: TextFieldAreaProps) {
	const { t } = useTranslation();
	const [isFocused, setIsFocused] = React.useState(false);

	return (
		<FieldArea
			testID="idTextFieldArea"
			value={value}
			onChangeText={onChangeText}
			placeholder={t('enter-public-key-btc') as string}
			isFocused={isFocused}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			autoCapitalize="none"
			autoCorrect={false}
			multiline
			scrollEnabled
			blurOnSubmit={true}
			cursorColor={themes.colors.white}
			placeholderTextColor={themes.colors.light_grey}
			returnKeyType="done"
			style={{ textAlignVertical: 'top' }}
			maxLength={150}
		/>
	);
}
