import type * as React from "react";

import { cn } from "@/shared/lib/utils";

type PillProps = React.ComponentProps<"span"> & {
	variant?: "solid" | "outline";
};

export function Pill({ className, variant = "solid", ...props }: PillProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] leading-none tracking-wide",
				variant === "solid" && "border-gold/35 bg-gold-soft text-gold",
				variant === "outline" &&
					"border-border bg-transparent text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}
