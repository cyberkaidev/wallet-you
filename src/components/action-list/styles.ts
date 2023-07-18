import styled from 'styled-components/native';

import { useAppSettings } from '@/stores';
import { themes } from '@/themes';

const { isTablet } = useAppSettings.getState();

const { colors, border_radius, spaces, width } = themes;

export const ActionListContainer = styled.View`
	width: 100%;
	max-width: ${width.max_width};
	align-self: center;
	background-color: ${colors.black_000};
	border-radius: ${border_radius.radius_10};
	border: 1px solid ${colors.dark_grey};
`;

export const ItemButton = styled.TouchableOpacity`
	padding-left: ${isTablet ? spaces.space_20 : spaces.space_15};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Indicator = styled.View`
	position: absolute;
	bottom: 0;
	right: 0;
	height: 1px;
	width: 100%;
	background-color: ${colors.dark_grey};
`;

export const IconAndTitleContainer = styled.View`
	flex: 1;
	padding: ${isTablet ? spaces.space_25 : spaces.space_20} 0;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

export const IconContainer = styled.View`
	margin-right: ${spaces.space_15};
`;
