import "moment/locale/pt";
import "moment/locale/fr";
import "moment/locale/es";
import "moment/locale/de";

import moment from "moment";

import { useAppSettings } from "@/stores/useAppSettings";

export function useFormatDate(date: Date) {
	const { language } = useAppSettings.getState();

	moment.locale(language.split("-")[0]);
	return {
		date: moment(date).format("L"),
		time: moment(date).format("LT"),
		dateAndTime: `${moment(date).format("L")} ${moment(date).format("LT")}`,
	};
}
