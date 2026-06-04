import type * as React from "react";
import { useEffect } from "react";

import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { NavigationBar } from "@/components/organisms/NavigationBar";

type PageLayoutProps = {
	children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return (
		<div className="relative z-10 min-h-screen bg-transparent text-foreground">
			<a
				className="sr-only z-[60] rounded-full bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				href="#main-content"
			>
				Pular para o conteúdo principal
			</a>

			<div className="fixed top-6 right-6 z-50">
				<ThemeToggle />
			</div>

			<header className="mx-auto w-full max-w-6xl pt-12 pb-14 md:pt-16 md:pb-20">
				<NavigationBar />
			</header>

			<main
				className="mx-auto w-full max-w-6xl px-6 pb-24 outline-none"
				id="main-content"
				tabIndex={-1}
			>
				{children}
			</main>

			<footer className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-border border-t px-6 py-10 text-muted-foreground text-sm md:flex-row md:items-center md:justify-between">
				<p>Thiago Soares</p>
			</footer>
		</div>
	);
}
