import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { LanguageSwitcher } from "@/shared/components/atoms/LanguageSwitcher";
import i18n, {
	DEFAULT_LANGUAGE,
	LANGUAGE_STORAGE_KEY,
} from "@/shared/i18n/i18n";

describe("LanguageSwitcher", () => {
	beforeEach(async () => {
		window.localStorage.clear();
		await i18n.changeLanguage(DEFAULT_LANGUAGE);
		document.documentElement.lang = DEFAULT_LANGUAGE;
	});

	it("starts in pt-BR with accessible state", () => {
		render(<LanguageSwitcher />);

		const button = screen.getByRole("button", {
			name: /Idioma atual: Português. Alterar para inglês./i,
		});

		expect(button).toHaveAttribute("aria-pressed", "false");
		expect(button).toHaveTextContent("PT");
		expect(document.documentElement).toHaveAttribute("lang", "pt-BR");
	});

	it("switches to English, persists the choice and updates html lang", async () => {
		render(<LanguageSwitcher />);

		fireEvent.click(
			screen.getByRole("button", {
				name: /Idioma atual: Português. Alterar para inglês./i,
			}),
		);

		await waitFor(() => {
			expect(document.documentElement).toHaveAttribute("lang", "en");
		});

		const button = screen.getByRole("button", {
			name: /Current language: English. Switch to Portuguese./i,
		});

		expect(button).toHaveAttribute("aria-pressed", "true");
		expect(button).toHaveTextContent("EN");
		expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");
	});
});
