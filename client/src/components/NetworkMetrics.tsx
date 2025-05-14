import React from "react";
import Reveal from "./Reveal";
import { Download, Signal, Upload, Wifi } from "lucide-react";

const NetworkMetrics = ({ elementRef }) => {
	const performanceList = [
		{
			name: "Download Speed",
			record: `${25}+ Mbps`,
			description: "Recommend for small businesses",
			icon: <Download className="w-8 h-8" />,
		},

		{
			name: "Upload Speed",
			record: `${10}+ Mbps`,
			description: "Ideal for video conferencing",
			icon: <Upload className="w-8 h-8" />,
		},
		{
			name: "Ping",
			record: `${20}-${50} ms`,
			description: "Optimal latency range",
			icon: <Signal className="w-8 h-8" />,
		},
		{
			name: "Jitter",
			record: `<${30} ms`,
			description: "For stable connections",
			icon: <Wifi className="w-8 h-8" />,
		},
	];

	return (
		<section className="py-10 flex flex-col items-center w-full px-3 md:pt-32 " ref={elementRef}>
			<Reveal>
				<div className="flex flex-col justify-center items-center text-center gap-2">
					<h1 className="font-Roboto text-[30px] text-[#00A651] md:text-[40px]">Network Performance Hub</h1>
					<p className=" text-gray-600 leading-7 dark:text-gray-400">
						Comprehensive network analysis and monitoring tools
					</p>
				</div>
			</Reveal>

			<div className="flex flex-col gap-y-7 gap-x-7 w-full mt-20 md:flex-row">
				{performanceList.map((performance) => (
					<div
						key={performance.name}
						className="flex flex-col items-start p-5 gap-4 border-none rounded-md basis-[25%] w-full shadow-[0px_0px_8px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_10px_rgb(17,24,39)] duration-200">
						<Reveal>
							<div className="text-[#00A651]">{performance.icon}</div>
						</Reveal>
						<Reveal>
							<h1 className="font-Roboto">{performance.name}</h1>
						</Reveal>
						<Reveal>
							<h2 className="font-Roboto text-[25px] text-[#00A651]">{performance.record}</h2>
						</Reveal>
						<Reveal>
							<p className="text-xs text-gray-600 leading-5 dark:text-gray-400">{performance.description}</p>
						</Reveal>
					</div>
				))}
			</div>
		</section>
	);
};

export default NetworkMetrics;
