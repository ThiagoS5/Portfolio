import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/components/ui/button";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
	if (typeof window === "undefined") {
		return "dark";
	}

	const storedTheme = window.localStorage.getItem("theme");
	if (storedTheme === "dark" || storedTheme === "light") {
		return storedTheme;
	}

	return "dark";
}

export function ThemeToggle() {
	const { t } = useTranslation();
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", theme === "dark");
		root.style.colorScheme = theme;
		window.localStorage.setItem("theme", theme);
	}, [theme]);

	const isDark = theme === "dark";

	return (
		<Button
			aria-label={isDark ? t("controls.theme.light") : t("controls.theme.dark")}
			aria-pressed={isDark}
			className="size-10 rounded-full border-input bg-card/70 text-muted-foreground backdrop-blur transition duration-300 hover:border-gold hover:bg-card/70 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			size="icon"
			type="button"
			variant="outline"
		>
			{isDark ? (
				<Sun aria-hidden="true" className="size-4" />
			) : (
				<Moon aria-hidden="true" className="size-4" />
			)}
		</Button>
	);
}
