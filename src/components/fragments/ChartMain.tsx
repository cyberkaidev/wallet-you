import * as shape from 'd3-shape';
import React from 'react';
import { Dimensions, PanResponder, View } from 'react-native';
import { AreaChart } from 'react-native-svg-charts';

import { colors } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { ChartMainProps } from '@/types/ChartKitType';

import { CustomLine } from './CustomLine';
import { CustomTooltip } from './CustomTooltip';

export function ChartMain({ data }: ChartMainProps) {
	const size = React.useRef(data.length);
	const [positionX, setPositionX] = React.useState(-1);
	const { isTablet } = useAppSettings(state => state);

	const apx = React.useCallback((size = 0) => {
		const width = Dimensions.get('window').width;
		return (width / 750) * size;
	}, []);

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

	const updatePosition = React.useCallback((x: number) => {
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
	}, []);

	const verticalContentInset = { top: apx(40), bottom: apx(40) };

	return (
		<View
			testID="idChart"
			style={{
				width: apx(750),
				height: apx(isTablet ? 300 : 500),
			}}
		>
			<View style={{ flex: 1 }} {...panResponder.current.panHandlers}>
				<AreaChart
					style={{ flex: 1 }}
					data={data.map(item => item.value)}
					contentInset={{ ...verticalContentInset }}
					svg={{ fill: colors.transparent }}
					curve={shape.curveNatural}
				>
					<CustomLine isActive={positionX >= 0} />
					<CustomTooltip positionX={positionX} size={size} dataList={data} />
				</AreaChart>
			</View>
		</View>
	);
}
