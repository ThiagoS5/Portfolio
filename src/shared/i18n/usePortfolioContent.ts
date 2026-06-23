import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

type Certification = {
	description: string;
	title: string;
	year: string;
};

type Education = {
	degree: string;
	institution: string;
	period: string;
};

export type AboutContent = {
	asideLabel: string;
	certifications: Certification[];
	certificationsTitle: string;
	education: Education;
	educationTitle: string;
	intro: string;
	paragraphs: string[];
	profile: {
		alt: string;
		caption: string;
		src: string;
	};
	skills: string[];
	skillsAria: string;
	skillsTitle: string;
	title: string;
};

export type ExperienceItem = {
	company: string;
	description: string;
	highlights: string[];
	period: string;
	role: string;
	technologies: string[];
};

export type ExperienceContent = {
	achievementLabel: string;
	achievementTitle: string;
	items: ExperienceItem[];
	section: {
		description: string;
		eyebrow: string;
		title: string;
	};
	technologiesLabel: string;
};

export type ContactLink = {
	href: string;
	label: string;
	value: string;
};

export type ContactContent = {
	externalSuffix: string;
	form: {
		button: string;
		email: string;
		errors: {
			email: string;
			message: string;
			name: string;
		};
		help: string;
		labels: {
			email: string;
			message: string;
			name: string;
		};
		placeholders: {
			email: string;
			message: string;
			name: string;
		};
		status: string;
		title: string;
	};
	linkAria: string;
	links: ContactLink[];
	section: {
		description: string;
		eyebrow: string;
		title: string;
	};
};

export type NavigationContent = {
	ariaLabel: string;
	help: string;
	items: {
		about: string;
		contact: string;
		experience: string;
		faq: string;
		projects: string;
	};
	menu: {
		mobileClose: string;
		mobileOpen: string;
		pagesLabel: string;
	};
};

export type LayoutContent = {
	footerName: string;
	homeTitle: string;
	skipLink: string;
};

export type FaqItem = {
	answer: string;
	cta?: {
		ariaLabel: string;
		href: string;
		label: string;
	};
	question: string;
};

export type FaqContent = {
	items: FaqItem[];
	listLabel: string;
	section: {
		description: string;
		eyebrow: string;
		title: string;
	};
};

export type ProjectContent = {
	codeUrl: string;
	demoUrl?: string;
	description: string;
	previewAlt?: string;
	previewImage?: string;
	technologies: string[];
	title: string;
};

export type ProjectsContent = {
	actions: {
		code: string;
		codeAria: string;
		demo: string;
		demoAria: string;
		demoExternalAria: string;
	};
	items: ProjectContent[];
	listLabel: string;
	section: {
		description: string;
		eyebrow: string;
		title: string;
	};
	technologiesLabel: string;
};

function readResource<T>(t: TFunction, key: string) {
	return t(key, { returnObjects: true }) as T;
}

export function usePortfolioContent() {
	const { t } = useTranslation();

	return {
		about: readResource<AboutContent>(t, "about"),
		contact: readResource<ContactContent>(t, "contact"),
		experience: readResource<ExperienceContent>(t, "experience"),
		faq: readResource<FaqContent>(t, "faq"),
		layout: readResource<LayoutContent>(t, "layout"),
		navigation: readResource<NavigationContent>(t, "navigation"),
		projects: readResource<ProjectsContent>(t, "projects"),
	};
}
