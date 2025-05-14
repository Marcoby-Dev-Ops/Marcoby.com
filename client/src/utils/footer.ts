import x from "../assets/svgs/x-logo.svg";
import instagram from "../assets/svgs/instagram.svg";
import facebook from "../assets/svgs/facebook.svg";
import linkedin from "../assets/svgs/linkedin.svg";
import youtube from "../assets/svgs/youtube.svg";
// import { StaticImageData } from "next/image";

interface FooterLinksProps {
	name: string;
	links: {
		link: string;
		href: string;
	}[];
}

interface FooterIconProps {
	icon: string;
	href: string;
}

export const footerlinks: FooterLinksProps[] = [
	{
		name: "Services",
		links: [
			{
				link: "Marcoby Pulse",
				href: "https://pulse.marcoby.com",
			},
			{
				link: "Marcoby Catalyst",
				href: "https://catalyst.marcoby.com",
			},
			{
				link: "Marcoby Nexus",
				href: "https://nexus.marcoby.com",
			},
		],
	},
	{
		name: "Resources",
		links: [
			{
				link: "Contact Us",
				href: "mailto:learnmore@marcoby.com",
			},
			{
				link: "Schedule a Call",
				href: "https://outlook.office365.com/book/MarcobyITSolutions@marcoby.com/",
			},
			{
				link: "Blog",
				href: "https://learn.marcoby.com",
			},
		],
	},
	{
		name: "Legal",
		links: [
			{
				link: "Privacy Policy",
				href: "https://marcobycloud.com/acceptable-use-policy/",
			},
			{
				link: "Terms of Service",
				href: "https://marcobycloud.com/terms-of-service/",
			},
			{
				link: "Security & Compliance",
				href: "https://marcobycloud.com/service-level-guarantees/",
			},
		],
	},
];

export const footerIcons: FooterIconProps[] = [
	{
		icon: x,
		href: "https://x.com/MarcobyOnline",
	},
	{
		icon: instagram,
		href: "https://www.instagram.com/MarcobyOnline/",
	},
	{
		icon: linkedin,
		href: "https://www.linkedin.com/in/MarcobyOnline",
	},
	{
		icon: youtube,
		href: "https://www.youtube.com/@MarcobyOnline",
	},
	{
		icon: facebook,
		href: "https://www.facebook.com/MarcobyOnline",
	},
];
