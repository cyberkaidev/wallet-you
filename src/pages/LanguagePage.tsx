import React from "react";
import { useTranslation } from "react-i18next";

import { HeaderSwiperOptions } from "@/components/HeaderSwiperOptions";
import { LimitedWidthContainer } from "@/components/LimitedWidthContainer";
import { ScrollView } from "@/components/ScrollView";
import { SelectList } from "@/components/SelectList";
import { useAppSettings } from "@/stores/useAppSettings";
import { LanguagesType } from "@/types/LanguagePageType";

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
