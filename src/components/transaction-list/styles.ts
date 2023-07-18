import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import { useAppSettings } from '@/stores';
import { themes } from '@/themes';

import { ItemsProps } from './types';

const { colors, border_radius, spaces, width } = themes;

const { isTablet } = useAppSettings.getState();

const PADDING_ITEM_TABLET = `${hp('3.5%')}px`;
const MARGIN_TOP_TRANSACTION = `${hp('5%')}px`;

export const TransactionListContainer = styled.View`
	margin-top: ${isTablet ? MARGIN_TOP_TRANSACTION : spaces.space_25};
	width: 100%;
	max-width: ${width.max_width};
	align-self: center;
`;

export const TransactionContainer = styled.View`
	border-radius: ${border_radius.radius_10};
	background-color: ${colors.black_000};
`;

export const TransactionItemContainer = styled.TouchableOpacity`
	flex: 1;
	flex-direction: row;
	padding-left: ${isTablet ? spaces.space_20 : spaces.space_10};
`;

export const Items = styled.View<ItemsProps>`
	flex: 1;
	flex-direction: row;
	align-items: center;
	padding-top: ${isTablet ? PADDING_ITEM_TABLET : spaces.space_25};
	padding-bottom: ${isTablet ? PADDING_ITEM_TABLET : spaces.space_25};
	padding-right: ${isTablet ? spaces.space_20 : spaces.space_10};
	border-bottom-width: 1px;
	border-bottom-color: ${({ borderVisible }) =>
		borderVisible ? colors.dark_grey : colors.transparent};
	border-bottom-style: solid;
`;

export const TextContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Circle = styled.View`
	width: 50px;
	justify-content: center;
	align-items: center;
	margin-right: ${isTablet ? spaces.space_20 : spaces.space_10};
`;

export const Center = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const Column = styled.View`
	flex: 1;
	margin-right: ${spaces.space_15};
`;
