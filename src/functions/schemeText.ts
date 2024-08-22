import { fontSizes } from "@/helpers/themes";
import { SchemeTextProps } from "@/types/SchemeTextType";

export function schemeText({ weight, size }: SchemeTextProps) {
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
