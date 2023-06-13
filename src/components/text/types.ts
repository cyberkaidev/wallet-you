import React from 'react';

export interface TextProps {
	children: React.ReactNode;
	weight?: 'regular' | 'medium' | 'bold';
	size?: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
	color?: string;
	marginT?: string;
	marginB?: string;
	marginR?: string;
	marginL?: string;
}

export interface TextContainerProps {
	fontFamily: 'Inter-Regular' | 'Inter-Medium' | 'Inter-Bold';
	fontSize: number;
	color: string;
	marginT: string;
	marginB: string;
	marginR: string;
	marginL: string;
}

export interface SchemeTextProps {
	weight: 'regular' | 'medium' | 'bold';
	size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
}
