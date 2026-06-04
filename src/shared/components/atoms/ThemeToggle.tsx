import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
			aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
			aria-pressed={isDark}
			className="size-11 rounded-full border-border bg-card text-foreground/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.04)] transition duration-300 hover:border-foreground/35 hover:bg-card hover:text-foreground hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.12),0_12px_30px_rgba(0,0,0,0.22)] focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
