import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";
import i18n, {
	DEFAULT_LANGUAGE,
	LANGUAGE_STORAGE_KEY,
} from "@/shared/i18n/i18n";

if (typeof window !== "undefined") {
	const storage = new Map<string, string>();

	Object.defineProperty(window, "localStorage", {
		configurable: true,
		value: {
			clear: () => storage.clear(),
			getItem: (key: string) => storage.get(key) ?? null,
			removeItem: (key: string) => storage.delete(key),
			setItem: (key: string, value: string) => storage.set(key, value),
		},
	});
}

beforeEach(() => {
	if (typeof window === "undefined") {
		return;
	}

	window.localStorage.removeItem(LANGUAGE_STORAGE_KEY);
	void i18n.changeLanguage(DEFAULT_LANGUAGE);
	document.documentElement.lang = DEFAULT_LANGUAGE;
});

afterEach(() => {
	cleanup();
});
