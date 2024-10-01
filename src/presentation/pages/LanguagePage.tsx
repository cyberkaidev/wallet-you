import React from "react";
import { useTranslation } from "react-i18next";

import { useAppSettings } from "~/application/stores/useAppSettings";
import { ScrollView } from "~/presentation/components/ScrollView";
import { LocalityCodes } from "~/shared/LocalityCodes";

import { HeaderSwiperOptions } from "../components/HeaderSwiperOptions";
import { LimitedWidthContainer } from "../components/LimitedWidthContainer";
import { SelectList } from "../components/SelectList";

type LanguagesType = {
	title: string;
	key: LocalityCodes["languageCode"];
};

export function LanguagePage() {
	const { t } = useTranslation();
	const { language, setLanguage } = useAppSettings();
	const [selected, setSelected] = React.useState(language);

	const languages: LanguagesType[] = [
		{ title: "English", key: "en-us" },
		{ title: "Português (BR)", key: "pt-br" },
		{ title: "Spanish", key: "es-ar" },
		{ title: "Deutsch", key: "de-ch" },
	];

	return (
		<React.Fragment>
			<HeaderSwiperOptions
				title={t("language")}
				onAction={() => setLanguage(selected)}
				disableAction={selected === language}
			/>
			<ScrollView>
				<LimitedWidthContainer>
					<SelectList data={languages} selected={selected} onSelected={arg => setSelected(arg)} />
				</LimitedWidthContainer>
			</ScrollView>
		</React.Fragment>
	);
}
