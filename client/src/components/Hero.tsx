import React from "react";
import Reveal from "./Reveal";
import ITHealthCheck from "./ITHealthCheck";
// import herobg from "../assets/bgvideo.mp4";
// import EcosystemMap from "./EcosystemData";

const Hero = () => {
	return (
		<section
			className="relative pt-10 px-2 flex justify-center items-center h-screen w-full text-center overflow-hidden md:pt-44 md:pb-20"
			id="hero">
			{/* <video
				autoPlay
				loop
				muted
				className="absolute w-full h-full top-[50%] left-[50%] object-cover -translate-x-[50%] -translate-y-[50%] z-0">
				<source src={herobg} type="video/mp4" />
			</video>

			<div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_top,rgba(228,240,236,0.8),rgba(228,240,236,0.7),rgba(228,240,236,0.6))] dark:bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.8),rgba(0,0,0,0.7))] z-1"></div> */}

			<div className="absolute w-full h-full overflow-hidden bg-gradient-to-r from-[#00A651] via-[#013a1f] to-[#00A651] animate-coloring bg-[300%,300%] ">
				<div className="absolute dark:bg-black bg-white w-full h-full -skew-y-[40deg] md:-skew-y-[25deg]"></div>
			</div>

			<Reveal>
				<div className="relative flex flex-col items-center justify-center gap-y-7 max-w-[600px] text-center z-[2]">
					<h1 className="font-OpenSans text-sm text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] dark:bg-[#e4f0ec20]">
						Is Your Business Technology Slowing You Down?
					</h1>
					<p className="text-4xl text-[#00A651] font-Roboto tracking-wide md:leading-[70px] md:text-6xl">
						We Handle Your Tech, You Grow Your Business
					</p>
					<p className="px-1 font-Noto text-sm text-gray-600 dark:text-gray-400">
						We set up, manage, and support all your business technology—computers, software, updates, and more. Take our free Business Checkup to see how your tech is doing.
					</p>
					<div className="mt-4">
						<ITHealthCheck inlineButton />
						<div className="text-xs text-gray-500 mt-2">Takes 2 minutes. No obligation.</div>
					</div>
				</div>
			</Reveal>
		</section>
	);
};

export default Hero;
