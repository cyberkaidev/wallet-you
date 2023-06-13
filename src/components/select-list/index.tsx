import React from 'react';
import { Text } from '../text';
import { BorderSelect, ItemButton, SelectListContainer, Selected } from './styles';
import { themes } from '@src/themes';
import { SelectListProps } from './types';

export function SelectList({ data, selected, onSelected }: SelectListProps) {
	return (
		<SelectListContainer testID="idSelectList">
			{data.map((item, index) => (
				<ItemButton key={index} testID={`id${index}`} onPress={() => onSelected(item.ref)}>
					<BorderSelect>{selected === item.ref && <Selected />}</BorderSelect>
					<Text size="M" weight="medium" marginL={themes.spaces.space_10}>
						{item.title}
					</Text>
				</ItemButton>
			))}
		</SelectListContainer>
	);
}
