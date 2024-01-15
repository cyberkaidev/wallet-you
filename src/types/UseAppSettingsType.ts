interface DataProps {
	currency: 'aud' | 'brl' | 'cad' | 'eur' | 'gbp' | 'usd';
	language: 'de-ch' | 'en-us' | 'es-ar' | 'pt-br';
	isTablet: boolean | null;
}

export interface UseAppSettingsProps extends DataProps {
	setCurrency: (arg: DataProps['currency']) => void;
	setLanguage: (arg: DataProps['language']) => void;
	setIsTablet: () => void;
}
