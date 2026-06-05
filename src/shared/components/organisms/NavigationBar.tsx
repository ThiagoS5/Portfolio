import {
	AnimatePresence,
	motion,
	type Transition,
	useReducedMotion,
	type Variants,
} from "framer-motion";
import {
	BriefcaseBusiness,
	ChevronRight,
	CircleHelp,
	Code2,
	Mail,
	Menu,
	UserRound,
	X,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { NavItem } from "@/shared/components/molecules/NavItem";
import { Button } from "@/shared/components/ui/button";
import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";
import { cn } from "@/shared/lib/utils";

export function NavigationBar() {
	const { t } = useTranslation();
	const { navigation } = usePortfolioContent();
	const { pathname } = useLocation();
	const [isExpanded, setIsExpanded] = useState(false);
	const desktopMenuId = useId();
	const mobileMenuId = useId();
	const shouldReduceMotion = useReducedMotion();
	const isHome = pathname === "/";
	const previousPathnameRef = useRef(pathname);
	const navItems = [
		{
			icon: <UserRound aria-hidden="true" className="size-5" />,
			label: navigation.items.about,
			to: "/sobre-mim",
		},
		{
			icon: <Code2 aria-hidden="true" className="size-5" />,
			label: navigation.items.projects,
			to: "/projetos",
		},
		{
			icon: <BriefcaseBusiness aria-hidden="true" className="size-5" />,
			label: navigation.items.experience,
			to: "/experiencia",
		},
		{
			icon: <Mail aria-hidden="true" className="size-5" />,
			label: navigation.items.contact,
			to: "/contatos",
		},
		{
			icon: <CircleHelp aria-hidden="true" className="size-5" />,
			label: navigation.items.faq,
			to: "/faq",
		},
	];
	const homePrimaryItem = navItems[4];
	const activeItem =
		navItems.find((item) => item.to === pathname) ?? homePrimaryItem;
	const inactiveItems = navItems.filter((item) => item.to !== activeItem.to);
	const menuVariants: Variants = shouldReduceMotion
		? {
				exit: { opacity: 1, y: 0 },
				hidden: { opacity: 1, y: 0 },
				show: { opacity: 1, y: 0 },
			}
		: {
				exit: {
					opacity: 0,
					transition: { duration: 0.18, ease: "easeOut" },
					y: 6,
				},
				hidden: { opacity: 0, y: 8 },
				show: {
					opacity: 1,
					transition: {
						duration: 0.28,
						ease: "easeOut",
						staggerChildren: 0.045,
					},
					y: 0,
				},
			};
	const itemVariants: Variants = shouldReduceMotion
		? {
				exit: { opacity: 1, y: 0 },
				hidden: { opacity: 1, y: 0 },
				show: { opacity: 1, y: 0 },
			}
		: {
				exit: { opacity: 0, y: 6 },
				hidden: { opacity: 0, y: 8 },
				show: { opacity: 1, y: 0 },
			};
	const itemTransition: Transition = shouldReduceMotion
		? { duration: 0 }
		: { duration: 0.24, ease: "easeOut" };
	const triggerTransition: Transition = shouldReduceMotion
		? { duration: 0 }
		: { duration: 0.18, ease: "easeOut" };

	useEffect(() => {
		if (previousPathnameRef.current !== pathname) {
			previousPathnameRef.current = pathname;
			setIsExpanded(false);
		}
	}, [pathname]);

	useEffect(() => {
		if (!isExpanded) {
			return;
		}

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setIsExpanded(false);
			}
		}

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isExpanded]);

	return (
		<nav
			aria-describedby="navigation-help"
			aria-label={navigation.ariaLabel}
			className="relative w-full"
		>
			<p className="sr-only" id="navigation-help">
				{navigation.help}
			</p>

			{isHome ? null : (
				<div className="relative mx-auto flex w-fit justify-center md:hidden">
					<Button
						aria-controls={mobileMenuId}
						aria-expanded={isExpanded}
						aria-label={
							isExpanded
								? navigation.menu.mobileClose
								: navigation.menu.mobileOpen
						}
						className="size-12 rounded-full border-border bg-card text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-300 ease-out hover:border-foreground/35 hover:bg-card hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
						onClick={() => setIsExpanded((current) => !current)}
						size="icon"
						type="button"
						variant="outline"
					>
						{isExpanded ? (
							<X aria-hidden="true" className="size-5" />
						) : (
							<Menu aria-hidden="true" className="size-5" />
						)}
					</Button>

					<AnimatePresence initial={false}>
						{isExpanded ? (
							<motion.ul
								animate="show"
								aria-label={navigation.menu.pagesLabel}
								className="absolute top-full left-1/2 z-50 mt-4 flex w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 flex-col items-center gap-4 rounded-2xl border border-border bg-background p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_50px_rgba(0,0,0,0.32)]"
								exit="exit"
								id={mobileMenuId}
								initial="hidden"
								variants={menuVariants}
							>
								{navItems.map((item) => (
									<NavItem
										className="w-full gap-3 rounded-xl py-2"
										icon={item.icon}
										isActive={pathname === item.to}
										key={item.to}
										label={item.label}
										motionVariants={itemVariants}
										onNavigate={() => setIsExpanded(false)}
										to={item.to}
									/>
								))}
							</motion.ul>
						) : null}
					</AnimatePresence>
				</div>
			)}

			{isHome ? (
				<div className="scrollbar-hide overflow-x-auto px-3 py-1 sm:px-4 md:px-6">
					<div className="relative mx-auto w-full min-w-[320px] max-w-5xl">
						<div
							aria-hidden="true"
							className="absolute top-7 right-7 left-7 z-0 h-px bg-foreground/15 md:right-14 md:left-14 dark:bg-foreground/10"
						/>
						<ul className="relative z-10 grid grid-cols-5 items-start gap-1 md:flex md:justify-between">
							{navItems.map((item) => (
								<NavItem
									className="w-auto min-w-0 gap-3 px-1 md:w-28 md:gap-4 md:px-0"
									icon={item.icon}
									key={item.to}
									label={item.label}
									to={item.to}
								/>
							))}
						</ul>
					</div>
				</div>
			) : (
				<motion.ul
					aria-label={navigation.menu.pagesLabel}
					className="mx-auto hidden w-fit flex-row items-start justify-start gap-8 md:flex"
					id={desktopMenuId}
					layout={!shouldReduceMotion}
				>
					<li className="flex w-28 shrink-0 flex-col items-center">
						<motion.button
							aria-controls={desktopMenuId}
							aria-current="page"
							aria-expanded={isExpanded}
							aria-label={t(
								isExpanded
									? "navigation.menu.collapseActive"
									: "navigation.menu.expandActive",
								{ label: activeItem.label },
							)}
							className="group flex w-full flex-col items-center gap-4 bg-transparent p-0 text-foreground outline-none transition-all duration-300 ease-out focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
							onClick={() => setIsExpanded((current) => !current)}
							transition={triggerTransition}
							type="button"
							whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
							whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
						>
							<span className="relative flex items-center justify-center">
								<span className="flex size-14 items-center justify-center rounded-full border border-foreground/45 bg-card text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_rgba(255,255,255,0.12),0_16px_40px_rgba(0,0,0,0.24)] transition-all duration-300 ease-out group-hover:border-foreground/60 group-hover:text-foreground group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_0_1px_rgba(255,255,255,0.16),0_14px_36px_rgba(0,0,0,0.26)]">
									{activeItem.icon}
								</span>
								<ChevronRight
									aria-hidden="true"
									className={cn(
										"absolute left-full ml-2 size-5 text-foreground/75 transition-all duration-300 ease-out group-hover:text-foreground",
										isExpanded && "rotate-90",
									)}
								/>
							</span>
							<span className="font-semibold text-foreground text-sm transition-all duration-300 ease-out">
								{activeItem.label}
							</span>
						</motion.button>
					</li>

					<AnimatePresence initial={false}>
						{isExpanded
							? inactiveItems.map((item, index) => (
									<NavItem
										className="w-28"
										icon={item.icon}
										key={item.to}
										label={item.label}
										motionAnimate="show"
										motionExit="exit"
										motionInitial="hidden"
										motionTransition={{
											...itemTransition,
											delay: shouldReduceMotion ? 0 : index * 0.045,
										}}
										motionVariants={itemVariants}
										onNavigate={() => setIsExpanded(false)}
										to={item.to}
									/>
								))
							: null}
					</AnimatePresence>
				</motion.ul>
			)}
		</nav>
	);
}
