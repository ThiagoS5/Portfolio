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
				"inline-flex size-14 shrink-0 items-center justify-center rounded-full border bg-card bg-clip-padding text-muted-foreground outline-none transition-all duration-300 ease-out hover:border-gold hover:text-gold hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
				isActive
					? "border-gold text-gold shadow-[0_0_0_4px_var(--gold-soft)]"
					: "border-input",
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
