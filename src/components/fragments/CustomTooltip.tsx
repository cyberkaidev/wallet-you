import currencyJS from 'currency.js';
import React from 'react';
import { Dimensions } from 'react-native';
import { Circle, G, Line, Rect, Text as SvgText } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { useFormatDate } from '@/hooks/useFormatDate';
import { CustomTooltipProps } from '@/types/CustomTooltipType';

export function CustomTooltip({ x, y, ticks, positionX, size, dataList }: CustomTooltipProps) {
	const apx = (size = 0) => {
		const width = Dimensions.get('window').width;
		return (width / 750) * size;
	};

	if (positionX < 0) return null;

	const { dateAndTime } = useFormatDate(dataList[positionX].date);
	const currency = currencyJS(dataList[positionX].value, {
		separator: ',',
		decimal: '.',
		symbol: '$',
		precision: 2,
	}).format();

	return (
		<G x={x?.(positionX)} key="tooltip">
			<G
				x={positionX > size.current / 2 ? -apx(300 + 10) : apx(10)}
				y={(y?.(dataList[positionX].value) ?? 0) - apx(10)}
			>
				<Rect
					y={-apx(24 + 24 + 20) / 2}
					rx={apx(12)}
					ry={apx(12)}
					width={apx(300)}
					height={apx(96)}
					stroke={colors.transparent}
					fill={colors.transparent}
				/>

				<SvgText x={apx(20)} fill={colors.white} fontWeight="bold" fontSize={apx(24)}>
					{dateAndTime}
				</SvgText>
				<SvgText
					x={apx(20)}
					y={apx(24 + 20)}
					fontSize={apx(24)}
					fontWeight="bold"
					fill={colors.white}
				>
					{currency}
				</SvgText>
			</G>

			<G>
				<Circle
					cy={y?.(dataList[positionX].value)}
					r={apx(20 / 2)}
					stroke={colors.light_cyan}
					strokeWidth={apx(2)}
					fill={colors.white}
				/>
			</G>
		</G>
	);
}
