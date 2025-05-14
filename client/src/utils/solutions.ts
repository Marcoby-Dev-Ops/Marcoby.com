interface SolutionProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const solutionList: SolutionProps[] = [
	{
		name: "By Business Size",
		sublinks: [
			{
				title: "Individual-owned business",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Early-stage growing company",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Small to mid-sized business",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Large-scale established company",
				href: "https://learn.marcoby.com",
			},
		],
	},
	{
		name: "By Service Type",
		sublinks: [
			{
				title: "Website & Hosting",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Business Formation and Licensing Services",
				href: "https://learn.marcoby.com",
			},
			{
				title: "IT Automation & Support",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Process Optimization",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Branding & Design",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Content & Marketing",
				href: "https://learn.marcoby.com",
			},
		],
	},
];
