import { Languages } from "lucide-react";
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
				className="size-11 rounded-full border-border bg-card font-semibold text-[0.7rem] text-foreground/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.04)] transition duration-300 hover:border-foreground/35 hover:bg-card hover:text-foreground hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.12),0_12px_30px_rgba(0,0,0,0.22)] focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				onClick={() => {
					void handleLanguageChange();
				}}
				size="icon"
				type="button"
				variant="outline"
			>
				<Languages aria-hidden="true" className="size-4" />
				<span aria-hidden="true">{currentLanguage === "en" ? "EN" : "PT"}</span>
			</Button>
			<span aria-live="polite" className="sr-only">
				{announcement}
			</span>
		</>
	);
}
