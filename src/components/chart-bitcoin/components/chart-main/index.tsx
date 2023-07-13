import * as shape from 'd3-shape';
import React from 'react';
import { Dimensions, PanResponder, View } from 'react-native';
import { AreaChart } from 'react-native-svg-charts';

import { useAppSettings } from '@/stores';
import { themes } from '@/themes';

import { CustomLine } from '../custom-line';
import { CustomTooltip } from '../custom-tooltip';
import { ChartMainProps } from './types';

export function ChartMain({ data }: ChartMainProps) {
	const { isTablet } = useAppSettings(state => state);

	const apx = (size = 0) => {
		const width = Dimensions.get('window').width;
		return (width / 750) * size;
	};

	const verticalContentInset = { top: apx(40), bottom: apx(40) };

	const dataList = data;
	const size = React.useRef(dataList.length);

	const [positionX, setPositionX] = React.useState(-1);

	const panResponder = React.useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: () => true,
			onMoveShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			onPanResponderTerminationRequest: () => true,
			onPanResponderGrant: evt => {
				updatePosition(evt.nativeEvent.locationX);
				return true;
			},
			onPanResponderMove: evt => {
				updatePosition(evt.nativeEvent.locationX);
				return true;
			},
			onPanResponderRelease: () => setPositionX(-1),
		}),
	);

	const updatePosition = (x: number) => {
		const YAxisWidth = apx(130);
		const x0 = apx(0);
		const chartWidth = apx(750) - YAxisWidth - x0;
		const xN = x0 + chartWidth;
		const xDistance = chartWidth / size.current;
		if (x <= x0) x = x0;
		if (x >= xN) x = xN;
		let value = Number(((x - x0) / xDistance).toFixed(0));
		if (value >= size.current - 1) value = size.current - 1;

		setPositionX(value);
	};

	return (
		<View
			testID="idChart"
			style={{
				width: apx(750),
				height: apx(isTablet ? 350 : 500),
			}}
		>
			<View style={{ flex: 1 }} {...panResponder.current.panHandlers}>
				<AreaChart
					style={{ flex: 1 }}
					data={dataList.map(item => item.value)}
					contentInset={{ ...verticalContentInset }}
					svg={{ fill: themes.colors.transparent }}
					curve={shape.curveNatural}
					animate
				>
					<CustomLine />
					<CustomTooltip positionX={positionX} size={size} dataList={data} />
				</AreaChart>
			</View>
		</View>
	);
}
