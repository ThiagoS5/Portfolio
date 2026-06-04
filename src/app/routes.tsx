import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "@/domains/home/HomePage";
import { AnimatedRouteOutlet } from "@/shared/components/templates/AnimatedRouteOutlet";

function RouteHydrateFallback() {
	return <div aria-hidden="true" className="min-h-screen bg-transparent" />;
}

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AnimatedRouteOutlet />,
		HydrateFallback: RouteHydrateFallback,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "sobre-mim",
				HydrateFallback: RouteHydrateFallback,
				lazy: async () => {
					const { AboutPage } = await import("@/domains/about/AboutPage");
					return { Component: AboutPage };
				},
			},
			{
				path: "projetos",
				HydrateFallback: RouteHydrateFallback,
				lazy: async () => {
					const { ProjectsPage } = await import(
						"@/domains/projects/ProjectsPage"
					);
					return { Component: ProjectsPage };
				},
			},
			{
				path: "experiencia",
				HydrateFallback: RouteHydrateFallback,
				lazy: async () => {
					const { ExperiencePage } = await import(
						"@/domains/experience/ExperiencePage"
					);
					return { Component: ExperiencePage };
				},
			},
			{
				path: "contatos",
				HydrateFallback: RouteHydrateFallback,
				lazy: async () => {
					const { ContactPage } = await import("@/domains/contact/ContactPage");
					return { Component: ContactPage };
				},
			},
			{
				path: "faq",
				HydrateFallback: RouteHydrateFallback,
				lazy: async () => {
					const { FaqPage } = await import("@/domains/faq/FaqPage");
					return { Component: FaqPage };
				},
			},
			{
				path: "*",
				element: <Navigate replace to="/" />,
			},
		],
	},
]);
