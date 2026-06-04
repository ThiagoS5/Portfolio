import type * as React from "react";

import { cn } from "@/lib/utils";

type PillProps = React.ComponentProps<"span"> & {
	variant?: "solid" | "outline";
};

export function Pill({ className, variant = "solid", ...props }: PillProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full px-4 py-1.5 font-medium text-xs leading-none",
				variant === "solid" &&
					"bg-foreground text-background ring-1 ring-foreground",
				variant === "outline" &&
					"bg-background text-foreground ring-1 ring-border",
				className,
			)}
			{...props}
		/>
	);
}
