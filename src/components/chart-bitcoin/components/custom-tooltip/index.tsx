import React from 'react';
import { apx } from '../../functions';
import { Circle, G, Line, Rect, Text as SvgText } from 'react-native-svg';
import { CustomTooltipProps } from './types';
import { themes } from '@src/themes';
import { useFormatCurrency, useFormatDate } from '@src/hooks';

export function CustomTooltip({ x, y, ticks, positionX, size, dataList }: CustomTooltipProps) {
	if (positionX < 0) return null;

	const { dateAndTime } = useFormatDate(dataList[positionX].date);
	const currency = useFormatCurrency(dataList[positionX].value);

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
					stroke="transparent"
					fill="transparent"
				/>

				<SvgText x={apx(20)} fill={themes.colors.white} fontSize={apx(24)}>
					{dateAndTime}
				</SvgText>
				<SvgText
					x={apx(20)}
					y={apx(24 + 20)}
					fontSize={apx(24)}
					fontWeight="bold"
					fill={themes.colors.white}
				>
					{currency}
				</SvgText>
			</G>

			<G>
				<Line
					y1={ticks?.[0]}
					y2={ticks?.[Number(ticks.length)]}
					stroke={themes.colors.white}
					strokeWidth={apx(3)}
					strokeDasharray={[6, 3]}
				/>

				<Circle
					cy={y?.(dataList[positionX].value)}
					r={apx(20 / 2)}
					stroke={themes.colors.purple_100}
					strokeWidth={apx(2)}
					fill={themes.colors.white}
				/>
			</G>
		</G>
	);
}
