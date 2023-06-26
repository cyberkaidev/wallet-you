import React from 'react';
import { useTranslation } from 'react-i18next';

import { themes } from '@/themes';

import { ButtonTitleGhost } from '../button-title-ghost';
import { Text } from '../text';
import { AlertContainer, BackgroundContainer, Footer, ModalContainer } from './styles';
import { AlertModalProps } from './types';

export function AlertModal({ title, visible, onCancel, onConfirm }: AlertModalProps) {
	const { t } = useTranslation();

	return (
		<ModalContainer testID="idModal" visible={visible} transparent>
			<BackgroundContainer>
				<AlertContainer testID="idAlertContainer">
					<Text size="XXL" weight="medium">
						{title}
					</Text>
					<Footer>
						<ButtonTitleGhost
							testID="idCancel"
							title={t('cancel')}
							size="small"
							onPress={onCancel}
							marginR={themes.spaces.space_30}
						/>
						<ButtonTitleGhost
							testID="idConfirm"
							title={t('confirm')}
							size="small"
							onPress={onConfirm}
						/>
					</Footer>
				</AlertContainer>
			</BackgroundContainer>
		</ModalContainer>
	);
}
