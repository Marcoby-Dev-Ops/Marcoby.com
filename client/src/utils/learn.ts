interface LearnProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const learnList: LearnProps[] = [
	{
		name: "Blog: Beyond IT: Learn with Marcoby",
		sublinks: [
			{
				title: "Automation",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Tech for Business",
				href: "https://learn.marcoby.com",
			},
			{
				title: "MSP Insights",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Productivity",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Vendor Deals",
				href: "https://learn.marcoby.com",
			},
		],
	},

	{
		name: "Resources",
		sublinks: [
			{
				title: "Guides",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Checklists",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Whitepapers",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Productivity",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Integration with OneDrive-based knowledge",
				href: "https://learn.marcoby.com",
			},
		],
	},
];
