import React, { useRef } from "react";
import { Layers, Zap, Box } from "lucide-react";
import Reveal from "./Reveal";
import catalystLogo from "../assets/images/catalyst-logo.png";
import nexusLogo from "../assets/images/nexus-logo.png";
import pulseLogo from "../assets/images/pulse-logo.png";

const Services = () => {
	const servicesList = [
		{
			name: "Pulse",
			description: "Value added reseller platform for hardware, software, and hosting solutions.",
			href: "https://pulse.marcoby.com",
			// icon: <Box className="w-8 h-8" />,
			icon: pulseLogo,
		},
		{
			name: "Catalyst",
			description: "Managed IT services tailored to businesses of all sizes.",
			href: "https://catalyst.marcoby.com",
			// icon: <Zap className="w-8 h-8" />,
			icon: catalystLogo,
		},
		{
			name: "Nexus",
			description: "Headquarters-as-a-Service platform intergrating tools, workflows and insights.",
			href: "https://nexus.marcoby.com",
			// icon: <Layers className="w-8 h-8" />,
			icon: nexusLogo,
		},
	];

	return (
		<section className="pt-10 flex flex-col items-center w-full px-3 md:pt-32">
			<Reveal>
				<div className="flex flex-col justify-center items-center text-center gap-2">
					<h1 className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] w-fit dark:bg-[#e4f0ec20]">
						Our Services
					</h1>
					<p className="font-Roboto text-[30px] md:text-[40px]">Comprehensive Solutions</p>
				</div>
			</Reveal>

			<div className="w-full flex flex-col gap-y-7 gap-x-7 mt-20 md:flex-row">
				{servicesList.map((service) => (
					<div
						key={service.name}
						className="flex flex-col items-start p-5 gap-4 border-none rounded-md w-full basis-[33.3%] shadow-[0px_0px_8px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_10px_rgb(17,24,39)]">
						<Reveal>
							<img className="w-20 h-20" src={service.icon} alt={service.name} />
						</Reveal>
						<Reveal>
							<h1 className="font-Roboto">{service.name}</h1>
						</Reveal>
						<Reveal>
							<p className="text-xs text-gray-600 leading-5 dark:text-gray-400">{service.description}</p>
							<a
								href={service.href}
								target="_blank"
								className="text-xs font-OpenSans text-[#006837] hover:text-[#00A651] hover:underline duration-300">
								Learn more &#8594;
							</a>
						</Reveal>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
