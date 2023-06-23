import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { themes } from '@/themes';

import { IconProps } from './types';

export function IconSuccess({ color = themes.colors.white, size = 25 }: IconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0ZM12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5ZM16.6161 7.86612L10 14.4822L8.38388 12.8661C7.89573 12.378 7.10427 12.378 6.61612 12.8661C6.12796 13.3543 6.12796 14.1457 6.61612 14.6339L9.11612 17.1339C9.60427 17.622 10.3957 17.622 10.8839 17.1339L18.3839 9.63388C18.872 9.14573 18.872 8.35427 18.3839 7.86612C17.8957 7.37796 17.1043 7.37796 16.6161 7.86612Z"
				fill={color}
			/>
		</Svg>
	);
}
