interface AboutProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const aboutList: AboutProps[] = [
	{
		name: "About Marcoby",
		sublinks: [
			{
				title: "Vision, mission, and values",
				href: "#about",
			},
			{
				title: "Founder story (Von & Kristin – the family + legacy vision)",
				href: "#about",
			},
			{
				title: "Timeline of growth / milestones",
				href: "#about",
			},
			{
				title: "Why Marcoby?",
				href: "#about",
			},
		],
	},
];
