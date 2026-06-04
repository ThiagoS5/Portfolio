import { NavigationBar } from "@/components/organisms/NavigationBar";

export function HomePage() {
	return (
		<div className="relative z-10 min-h-screen bg-transparent text-foreground">
			<main
				className="flex min-h-screen items-center justify-center px-0 py-12 outline-none"
				id="main-content"
				tabIndex={-1}
			>
				<h1 className="sr-only">Hub de navegação do portfólio</h1>
				<NavigationBar />
			</main>
		</div>
	);
}
