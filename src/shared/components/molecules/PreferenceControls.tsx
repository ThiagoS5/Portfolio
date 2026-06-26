import { Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import { LanguageSwitcher } from "@/shared/components/atoms/LanguageSwitcher";
import { ThemeToggle } from "@/shared/components/atoms/ThemeToggle";
import { Button } from "@/shared/components/ui/button";

export function PreferenceControls() {
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const isHome = pathname === "/";

	return (
		<div className="flex items-center gap-2">
			{isHome ? null : (
				<Button
					aria-label={t("controls.home")}
					asChild
					className="size-10 rounded-full border-input bg-card/70 text-muted-foreground backdrop-blur transition duration-300 hover:border-gold hover:bg-card/70 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
					size="icon"
					variant="outline"
				>
					<Link to="/">
						<Home aria-hidden="true" className="size-4" />
					</Link>
				</Button>
			)}
			<LanguageSwitcher />
			<ThemeToggle />
		</div>
	);
}
