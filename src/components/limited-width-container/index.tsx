import React from 'react';

import { WidthContainer } from './styles';
import { LimitedWidthContainerProps } from './types';

export function LimitedWidthContainer({ children }: LimitedWidthContainerProps) {
	return <WidthContainer testID="idLimitedWidth">{children}</WidthContainer>;
}
