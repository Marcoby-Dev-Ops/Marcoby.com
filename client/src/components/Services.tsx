import React from "react";
import Reveal from "./Reveal";
import Section from "./Section";
import pulseLogo from "../assets/images/pulse-logo.png";
import catalystLogo from "../assets/images/catalyst-logo.png";
import nexusLogo from "../assets/images/nexus-logo.png";

const servicesList = [
	{
		name: "Pulse",
		description: "Value added reseller platform for hardware, software, and hosting solutions.",
		href: "https://pulse.marcoby.com",
		logo: pulseLogo,
	},
	{
		name: "Catalyst",
		description: "Managed IT services tailored to businesses of all sizes.",
		href: "https://catalyst.marcoby.com",
		logo: catalystLogo,
	},
	{
		name: "Nexus",
		description: "Headquarters-as-a-Service platform integrating tools, workflows and insights.",
		href: "https://nexus.marcoby.com",
		logo: nexusLogo,
	},
];

const Services = () => {
	return (
		<section className="py-10 flex flex-col items-center w-full px-3 md:py-32 bg-[#f5f9f5] md:pt-32 dark:bg-black">
			<Reveal>
				<div className="flex flex-col justify-center items-center text-center gap-2">
					<h1 className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] w-fit dark:bg-[#e4f0ec20] text-lg md:text-xl">
						Our Services
					</h1>
					<p className="font-Roboto text-3xl md:text-5xl font-bold text-[#013a1f] dark:text-white mb-2">
						Comprehensive Solutions
					</p>
				</div>
			</Reveal>

			<div className="mt-5 w-full md:mt-10">
				<div className="py-10 mx-auto w-full md:max-w-lg lg:max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 md:flex-row">
					{servicesList.map((service) => (
						<div
							key={service.name}
							className="flex flex-col items-center bg-white p-8 gap-4 border-[1px] border-gray-200 dark:border-gray-700/40 rounded-2xl w-full basis-[33.3%] transition-transform duration-700 hover:-translate-y-3 shadow-lg hover:shadow-2xl min-h-[340px] dark:bg-[#181818]">
							<Reveal>
								<div className="w-24 h-24 flex items-center justify-center rounded-full shadow-lg border-4 border-white dark:border-gray-800 bg-white mb-3">
									<img
										src={service.logo}
										alt={service.name + "logo"}
										className="w-16 h-16 object-contain"
										loading="lazy"
									/>
								</div>
							</Reveal>
							<Reveal>
								<h2 className="font-Roboto text-xl text-[#00A651] mb-1 font-semibold text-center">{service.name}</h2>
							</Reveal>
							<Reveal>
								<p className="text-base text-gray-700 dark:text-gray-300 text-center mb-2">{service.description}</p>
							</Reveal>
							<a
								href={service.href}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-auto px-5 py-2 rounded-full bg-[#00A651] text-white font-semibold shadow hover:bg-[#008f4c] transition-colors text-sm">
								Learn more
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
