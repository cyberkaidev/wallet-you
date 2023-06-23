import styled from 'styled-components/native';

import { themes } from '@/themes';

export const SelectListContainer = styled.View``;

export const ItemButton = styled.TouchableOpacity`
	padding: ${themes.spaces.space_15} 0;
	flex-direction: row;
	align-items: center;
`;

export const BorderSelect = styled.View`
	width: 20px;
	height: 20px;
	align-items: center;
	justify-content: center;
	border-radius: 40px;
	border: 2px solid ${themes.colors.purple_100};
`;

export const Selected = styled.View`
	width: 10px;
	height: 10px;
	border-radius: 20px;
	background-color: ${themes.colors.purple_100};
`;
