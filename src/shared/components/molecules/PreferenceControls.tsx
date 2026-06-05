import { LanguageSwitcher } from "@/shared/components/atoms/LanguageSwitcher";
import { ThemeToggle } from "@/shared/components/atoms/ThemeToggle";

export function PreferenceControls() {
	return (
		<div className="flex items-center gap-2">
			<LanguageSwitcher />
			<ThemeToggle />
		</div>
	);
}
