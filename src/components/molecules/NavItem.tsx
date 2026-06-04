import { motion, type Transition, type Variants } from "framer-motion";
import type * as React from "react";

import { IconButton } from "@/components/atoms/IconButton";
import { cn } from "@/lib/utils";

type NavItemProps = {
	className?: string;
	icon: React.ReactNode;
	isActive?: boolean;
	label: string;
	motionAnimate?: string;
	motionExit?: string;
	motionInitial?: string;
	motionTransition?: Transition;
	motionVariants?: Variants;
	onNavigate?: () => void;
	orientation?: "horizontal" | "vertical";
	to: string;
};

export function NavItem({
	className,
	icon,
	isActive = false,
	label,
	motionAnimate,
	motionExit,
	motionInitial,
	motionTransition,
	motionVariants,
	onNavigate,
	orientation = "vertical",
	to,
}: NavItemProps) {
	return (
		<motion.li
			animate={motionAnimate}
			className={cn(
				"group flex shrink-0 items-center",
				orientation === "vertical"
					? "w-28 flex-col gap-4"
					: "w-auto flex-row gap-3",
				className,
			)}
			exit={motionExit}
			initial={motionInitial}
			transition={motionTransition}
			variants={motionVariants}
		>
			<IconButton
				icon={icon}
				isActive={isActive}
				label={label}
				onClick={onNavigate}
				to={to}
			/>
			<span
				aria-hidden="true"
				className={cn(
					"font-semibold text-sm transition-colors duration-300",
					orientation === "horizontal" && "whitespace-nowrap",
					isActive
						? "text-foreground"
						: "text-muted-foreground group-hover:text-foreground",
				)}
			>
				{label}
			</span>
		</motion.li>
	);
}
