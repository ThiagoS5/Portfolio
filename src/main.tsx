import { SpeedInsights } from "@vercel/speed-insights/next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/app/App";
import "@/shared/i18n/i18n";

import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("O elemento #root nao foi encontrado no arquivo HTML");
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
		<SpeedInsights />
	</StrictMode>,
);
