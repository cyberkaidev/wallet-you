import React from 'react';
import { FieldArea } from './styles';
import { themes } from '@src/themes';
import { useTranslation } from 'react-i18next';
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
			placeholderTextColor={themes.colors.grey_300}
			returnKeyType="done"
			style={{ textAlignVertical: 'top' }}
			maxLength={150}
		/>
	);
}
