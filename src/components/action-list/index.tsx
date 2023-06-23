import React from 'react';

import { IconArrowRight } from '@/assets';
import { themes } from '@/themes';

import { Text } from '../text';
import { ActionListContainer, Indicator, ItemButton } from './styles';
import { ActionListProps } from './types';

export function ActionList({ list }: ActionListProps) {
	return (
		<ActionListContainer testID="idActionList">
			{list.map((item, index) => (
				<ItemButton key={index} testID={item.testID} onPress={() => item.onAction()}>
					<Text size="M" marginL={themes.spaces.space_15}>
						{item.title}
					</Text>
					<IconArrowRight size={10} color={themes.colors.grey_200} />
					{list.length !== index + 1 && <Indicator />}
				</ItemButton>
			))}
		</ActionListContainer>
	);
}
