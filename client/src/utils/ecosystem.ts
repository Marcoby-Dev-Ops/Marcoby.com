interface EcosystemProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const ecosystemList: EcosystemProps[] = [
	{
		name: "Pulse",
		sublinks: [
			{
				title: "Domain & Hosting",
				href: "https://cloud.marcoby.com",
			},
			{
				title: "Microsoft 365 & Pax8 Tools",
				href: "https://cloud.marcoby.com",
			},
			{
				title: "Design Services",
				href: "https://cloud.marcoby.com",
			},
			{
				title: "Custom Tech Packages",
				href: "https://cloud.marcoby.com",
			},
			{
				title: "Partner Products",
				href: "https://cloud.marcoby.com",
			},
		],
	},

	{
		name: "Catalyst",
		sublinks: [
			{
				title: "IT-as-a-Service",
				href: "https://catalyst.marcoby.com/",
			},
			{
				title: "Web-as-a-Service",
				href: "https://catalyst.marcoby.com/",
			},
			{
				title: "Automation & Systems Admin",
				href: "https://catalyst.marcoby.com/",
			},
			{
				title: "Marketing-as-a-Service",
				href: "https://catalyst.marcoby.com/",
			},
			{
				title: "Monthly plans with features",
				href: "https://catalyst.marcoby.com/",
			},
		],
	},
	{
		name: "Nexus",
		sublinks: [
			{
				title: "Executive Agent (AI Assistant)",
				href: "https://nexus.marcoby.com",
			},
			{
				title: "Advisor System (N.E.X.U.S.)",
				href: "https://nexus.marcoby.com",
			},
			{
				title: "Workflow Automation",
				href: "https://nexus.marcoby.com",
			},
			{
				title: "Dashboard",
				href: "https://nexus.marcoby.com",
			},

			{
				title: "System Health, Insights, Memory, API integrations",
				href: "https://nexus.marcoby.com",
			},
		],
	},
];
