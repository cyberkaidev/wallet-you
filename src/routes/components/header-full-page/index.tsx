import React from 'react';
import { Text } from '@src/components';
import { HeaderFullPageContainer, SafeArea } from './styles';
import { HeaderFullPageProps } from './types';

export function HeaderFullPage({ title }: HeaderFullPageProps) {
	return (
		<HeaderFullPageContainer testID="idHeaderFullPage">
			<SafeArea>
				<Text size="XXXL" weight="bold">
					{title}
				</Text>
			</SafeArea>
		</HeaderFullPageContainer>
	);
}
