import { PreferenceControls } from "@/shared/components/molecules/PreferenceControls";
import { NavigationBar } from "@/shared/components/organisms/NavigationBar";
import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

export function HomePage() {
	const { layout } = usePortfolioContent();

	return (
		<div className="relative z-10 min-h-screen bg-transparent text-foreground">
			<div className="fixed top-5 right-5 z-50 sm:top-6 sm:right-6">
				<PreferenceControls />
			</div>
			<main
				className="flex min-h-screen items-center justify-center px-0 py-12 outline-none"
				id="main-content"
				tabIndex={-1}
			>
				<h1 className="sr-only">{layout.homeTitle}</h1>
				<NavigationBar />
			</main>
		</div>
	);
}
