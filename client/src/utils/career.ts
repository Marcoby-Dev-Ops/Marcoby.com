interface CareerProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const careerList: CareerProps[] = [
	{
		name: "Careers / Join Us",
		sublinks: [
			{
				title: "Culture, mission-aligned hiring",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Open roles at Marcoby and within Space Krashers",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Internships, volunteer roles, remote-first opportunities",
				href: "https://learn.marcoby.com",
			},
			{
				title: "Build With Us – highlight impact and vision",
				href: "https://learn.marcoby.com",
			},
		],
	},
];
