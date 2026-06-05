import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/shared/i18n/locales/en.json";
import ptBR from "@/shared/i18n/locales/pt-BR.json";

export const DEFAULT_LANGUAGE = "pt-BR";
export const LANGUAGE_STORAGE_KEY = "portfolio-language";
export const SUPPORTED_LANGUAGES = ["pt-BR", "en"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

function isSupportedLanguage(
	language: string | null,
): language is SupportedLanguage {
	return SUPPORTED_LANGUAGES.includes(language as SupportedLanguage);
}

function getLocalStorage() {
	if (typeof window === "undefined" || !window.localStorage) {
		return null;
	}

	return window.localStorage;
}

function getInitialLanguage(): SupportedLanguage {
	const storedLanguage =
		getLocalStorage()?.getItem(LANGUAGE_STORAGE_KEY) ?? null;

	return isSupportedLanguage(storedLanguage)
		? storedLanguage
		: DEFAULT_LANGUAGE;
}

function syncDocumentLanguage(language: string) {
	if (typeof document !== "undefined" && isSupportedLanguage(language)) {
		document.documentElement.lang = language;
	}
}

i18n.use(initReactI18next).init({
	fallbackLng: DEFAULT_LANGUAGE,
	interpolation: {
		escapeValue: false,
	},
	lng: getInitialLanguage(),
	resources: {
		en: {
			translation: en,
		},
		"pt-BR": {
			translation: ptBR,
		},
	},
	supportedLngs: SUPPORTED_LANGUAGES,
});

syncDocumentLanguage(i18n.resolvedLanguage ?? DEFAULT_LANGUAGE);

i18n.on("languageChanged", (language) => {
	if (!isSupportedLanguage(language)) {
		return;
	}

	syncDocumentLanguage(language);

	getLocalStorage()?.setItem(LANGUAGE_STORAGE_KEY, language);
});

export default i18n;
