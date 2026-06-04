import { createBrowserRouter, Navigate } from "react-router";

import { AnimatedRouteOutlet } from "@/components/templates/AnimatedRouteOutlet";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { ExperiencePage } from "@/pages/ExperiencePage";
import { FaqPage } from "@/pages/FaqPage";
import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AnimatedRouteOutlet />,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "sobre-mim",
				Component: AboutPage,
			},
			{
				path: "projetos",
				Component: ProjectsPage,
			},
			{
				path: "experiencia",
				Component: ExperiencePage,
			},
			{
				path: "contatos",
				Component: ContactPage,
			},
			{
				path: "faq",
				Component: FaqPage,
			},
			{
				path: "*",
				element: <Navigate replace to="/" />,
			},
		],
	},
]);
