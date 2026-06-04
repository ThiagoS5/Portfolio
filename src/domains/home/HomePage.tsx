import { ThemeToggle } from "@/shared/components/atoms/ThemeToggle";
import { NavigationBar } from "@/shared/components/organisms/NavigationBar";

export function HomePage() {
	return (
		<div className="relative z-10 min-h-screen bg-transparent text-foreground">
			<div className="fixed top-5 right-5 z-50 sm:top-6 sm:right-6">
				<ThemeToggle />
			</div>
			<main
				className="flex min-h-screen items-center justify-center px-0 py-12 outline-none"
				id="main-content"
				tabIndex={-1}
			>
				<h1 className="sr-only">Hub de navegacao do portfolio</h1>
				<NavigationBar />
			</main>
		</div>
	);
}
