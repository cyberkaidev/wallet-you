import React from 'react';

import { StylesProps } from './StylesType';

export interface TextProps {
	children: React.ReactNode;
	weight?: 'regular' | 'medium' | 'bold';
	size?: StylesProps['fontSize'];
	color?: string;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
}
