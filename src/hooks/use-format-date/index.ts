import { useAppSettings } from '@src/stores';
import moment from 'moment';
import 'moment/locale/pt';
import 'moment/locale/fr';
import 'moment/locale/es';
import 'moment/locale/de';

export function useFormatDate(date: Date) {
	const { language } = useAppSettings.getState();

	moment.locale(language.split('-')[0]);
	return {
		date: moment(date).format('L'),
		time: moment(date).format('LT'),
		dateAndTime: `${moment(date).format('L')} ${moment(date).format('LT')}`,
	};
}
