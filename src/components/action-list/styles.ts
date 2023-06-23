import styled from 'styled-components/native';

import { themes } from '@/themes';

export const ActionListContainer = styled.View`
	background-color: ${themes.colors.black_200};
	border-radius: ${themes.border_radius.radius_10};
	border: 1px solid ${themes.colors.grey_200};
`;

export const ItemButton = styled.TouchableOpacity`
	position: relative;
	padding-top: ${themes.spaces.space_20};
	padding-bottom: ${themes.spaces.space_20};
	padding-right: ${themes.spaces.space_15};
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
	background-color: ${themes.colors.grey_200};
`;
