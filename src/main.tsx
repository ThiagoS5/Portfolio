import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/app/App";

import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("O elemento #root nao foi encontrado no arquivo HTML");
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
