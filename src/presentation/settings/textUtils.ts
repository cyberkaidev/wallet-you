import { SchemeText } from "~/shared/Styles";

import { fontSizes } from "./themes";

type Props = {
	weight: SchemeText["weight"];
	size: SchemeText["fontSize"];
};

type TextUtils = {
	onFontFamily: () => SchemeText["fontFamily"];
	onFontSize: () => string;
};

export function textUtils({ weight, size }: Props): TextUtils {
	function onFontFamily() {
		switch (weight) {
			case "regular":
				return "Figtree-Regular";
			case "medium":
				return "Figtree-Medium";
			case "bold":
				return "Figtree-Bold";
			default:
				return "Figtree-Regular";
		}
	}

	function onFontSize() {
		return fontSizes[size];
	}

	return {
		onFontFamily,
		onFontSize,
	};
}
