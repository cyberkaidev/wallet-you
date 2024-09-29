import i18n from "i18next";

export function i18next() {
	function changeLanguage(language: string) {
		i18n.changeLanguage(language);
	}

	return { changeLanguage };
}
