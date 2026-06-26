import { HomeHero } from "@/domains/home/components/HomeHero";
import { PreferenceControls } from "@/shared/components/molecules/PreferenceControls";
import { NavigationBar } from "@/shared/components/organisms/NavigationBar";

export function HomePage() {
	return (
		<div className="relative z-10 min-h-screen bg-transparent text-foreground">
			<div className="fixed top-5 right-5 z-50 sm:top-6 sm:right-6">
				<PreferenceControls />
			</div>
			<main
				className="flex min-h-screen flex-col justify-center px-0 py-16 outline-none"
				id="main-content"
				tabIndex={-1}
			>
				<HomeHero />
				<div className="mt-14 md:mt-20">
					<NavigationBar />
				</div>
			</main>
		</div>
	);
}
