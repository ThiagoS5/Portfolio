const localStorageOption = "--localstorage-file=.vitest-localstorage";
const nodeOptions = process.env.NODE_OPTIONS ?? "";

if (!nodeOptions.includes("--localstorage-file=")) {
	process.env.NODE_OPTIONS = [nodeOptions, localStorageOption]
		.filter(Boolean)
		.join(" ");
}

await import("../node_modules/vitest/vitest.mjs");
