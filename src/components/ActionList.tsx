import React from 'react';

import { ActionListProps } from '@/types/ActionListType';

import { ActionListPlatform } from './fragments/ActionListPlatform';

export function ActionList(props: ActionListProps) {
	return <ActionListPlatform {...props} />;
}
