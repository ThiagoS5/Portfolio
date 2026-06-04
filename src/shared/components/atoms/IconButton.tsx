import { motion, useReducedMotion } from "framer-motion";
import type * as React from "react";
import { forwardRef } from "react";
import { Link, type LinkProps } from "react-router";

import { cn } from "@/shared/lib/utils";

type IconButtonProps = {
	icon: React.ReactNode;
	isActive?: boolean;
	label: string;
	onClick?: () => void;
	to: string;
};

const RouterLink = forwardRef<HTMLAnchorElement, LinkProps>(
	({ children, ...props }, ref) => (
		<Link ref={ref} {...props}>
			{children}
		</Link>
	),
);
RouterLink.displayName = "RouterLink";

const MotionLink = motion.create(RouterLink);

export function IconButton({
	icon,
	isActive = false,
	label,
	onClick,
	to,
}: IconButtonProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<MotionLink
			aria-current={isActive ? "page" : undefined}
			aria-label={label}
			className={cn(
				"!bg-background hover:!bg-background inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-clip-padding text-foreground/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.03)] outline-none transition-all duration-300 ease-out hover:border-foreground/35 hover:text-foreground hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.12),0_14px_36px_rgba(0,0,0,0.22)] focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
				isActive
					? "!bg-background border-foreground/45 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_rgba(255,255,255,0.12),0_16px_42px_rgba(0,0,0,0.28)]"
					: "border-border",
			)}
			data-size="icon"
			data-slot="button"
			data-variant="outline"
			onClick={onClick}
			to={to}
			transition={
				shouldReduceMotion
					? { duration: 0 }
					: { duration: 0.18, ease: "easeOut" }
			}
			whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
			whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
		>
			<span aria-hidden="true" className="flex items-center justify-center">
				{icon}
			</span>
			<span className="sr-only">{label}</span>
		</MotionLink>
	);
}
