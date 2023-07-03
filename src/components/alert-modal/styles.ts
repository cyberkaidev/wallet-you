import styled from 'styled-components/native';

import { themes } from '@/themes';

export const ModalContainer = styled.Modal``;

export const BackgroundContainer = styled.View`
	flex: 1;
	background-color: ${themes.colors.black_300_30pct};
	align-items: center;
	justify-content: center;
	padding: 0 ${themes.spaces.space_15};
`;

export const AlertContainer = styled.View`
	width: 100%;
	max-width: ${themes.width.max_width};
	padding: ${themes.spaces.space_30} ${themes.spaces.space_20};
	border-radius: ${themes.border_radius.radius_15};
	background-color: ${themes.colors.black_200};
`;

export const Footer = styled.View`
	width: 100%;
	margin-top: ${themes.spaces.space_30};
	flex-direction: row;
	justify-content: flex-end;
`;
