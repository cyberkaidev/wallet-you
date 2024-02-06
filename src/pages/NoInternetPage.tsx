import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { IconNoInternet } from '@/assets';
import { Text } from '@/components/Text';
import { spaces } from '@/helpers/themes';

export function NoInternetPage() {
	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			<IconNoInternet porcentSize="10%" />
			<Text marginT={spaces.space_15} size="l" weight="bold">
				{t('no_internet_connection')}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
