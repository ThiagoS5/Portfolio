import type * as React from "react";
import { useEffect } from "react";
import { PreferenceControls } from "@/shared/components/molecules/PreferenceControls";
import { NavigationBar } from "@/shared/components/organisms/NavigationBar";
import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

type PageLayoutProps = {
	children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
	const { layout } = usePortfolioContent();

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return (
		<div className="relative z-10 min-h-screen bg-transparent text-foreground">
			<a
				className="sr-only z-[60] rounded-full bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				href="#main-content"
			>
				{layout.skipLink}
			</a>

			<div className="fixed top-6 right-6 z-50">
				<PreferenceControls />
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

			<footer className="border-border border-t">
				<div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
					<p className="font-mono text-muted-foreground text-xs tracking-wide">
						{layout.copyright}
					</p>
					<div className="flex gap-6">
						{[
							{ href: "https://github.com/ThiagoS5", label: "GitHub" },
							{
								href: "https://www.linkedin.com/in/thiago-marqueti-soares/",
								label: "LinkedIn",
							},
							{ href: "mailto:thimarqueti@gmail.com", label: "Email" },
						].map((social) => (
							<a
								className="font-mono text-muted-foreground text-xs tracking-wide transition-colors hover:text-gold focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
								href={social.href}
								key={social.label}
								rel="noopener noreferrer"
								target="_blank"
							>
								{social.label}
							</a>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}
