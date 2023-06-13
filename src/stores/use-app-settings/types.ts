interface DataProps {
	currency: 'aud' | 'brl' | 'cad' | 'eur' | 'gbp' | 'usd';
	language: 'de-ch' | 'en-us' | 'es-ar' | 'pt-br';
}

export interface UseAppSettingsProps extends DataProps {
	setCurrency: (arg: DataProps['currency']) => void;
	setLanguage: (arg: DataProps['language']) => void;
}
