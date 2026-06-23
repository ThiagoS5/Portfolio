import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
		<Analytics />
		<SpeedInsights />
	</StrictMode>,
);
