import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/components/ui/button";
import { DEFAULT_LANGUAGE, type SupportedLanguage } from "@/shared/i18n/i18n";

function getResolvedLanguage(language?: string): SupportedLanguage {
	return language === "en" ? "en" : DEFAULT_LANGUAGE;
}

export function LanguageSwitcher() {
	const { i18n, t } = useTranslation();
	const currentLanguage = getResolvedLanguage(i18n.resolvedLanguage);
	const nextLanguage = currentLanguage === "en" ? DEFAULT_LANGUAGE : "en";
	const currentLanguageName = t(`controls.language.names.${currentLanguage}`);
	const nextLanguageName = t(`controls.language.names.${nextLanguage}`);
	const [announcement, setAnnouncement] = useState("");

	async function handleLanguageChange() {
		setAnnouncement(
			t("controls.language.status", {
				language: nextLanguageName,
			}),
		);
		await i18n.changeLanguage(nextLanguage);
	}

	return (
		<>
			<Button
				aria-label={t("controls.language.label", {
					current: currentLanguageName,
					next: nextLanguageName,
				})}
				aria-pressed={currentLanguage === "en"}
				className="size-10 rounded-full border-input bg-card/70 font-mono font-semibold text-[0.72rem] text-muted-foreground tracking-wide backdrop-blur transition duration-300 hover:border-gold hover:bg-card/70 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				onClick={() => {
					void handleLanguageChange();
				}}
				size="icon"
				type="button"
				variant="outline"
			>
				<span aria-hidden="true">{currentLanguage === "en" ? "EN" : "PT"}</span>
			</Button>
			<span aria-live="polite" className="sr-only">
				{announcement}
			</span>
		</>
	);
}
