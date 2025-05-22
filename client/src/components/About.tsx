import React, { useEffect } from "react";
import aboutImg from "../assets/images/logo.png";
import pulseLogo from "../assets/images/pulse-logo.png";
import catalystLogo from "../assets/images/catalyst-logo.png";
import nexusLogo from "../assets/images/nexus-logo.png";
import pulseImg from "../assets/images/blog/harnessing-the-power-of-cloud-services-for-small-businesses.png";
import catalystImg from "../assets/images/blog/data-security-must-haves-for-small-businesses.png";
import nexusImg from "../assets/images/blog/nexus-tips-streamlining-your-small-business-it-operations.png";
import Reveal from "./Reveal";
import Section from "./Section";
import { User, TrendingUp, Headset, BadgeCheck, Layers, ChevronDown } from "lucide-react";
import bgvideo from "../assets/bgvideo.mp4";
import { useLocation } from "react-router-dom";

const values = [
	{ label: "Innovation", desc: "Building tools that move people forward" },
	{ label: "Empowerment", desc: "Helping small teams do big things" },
	{ label: "Resilience", desc: "Adapting fast to support lasting success" },
	{ label: "Community", desc: "Growing through shared wins" },
	{ label: "Legacy", desc: "Designing for the next generation, not just the next quarter" },
];

const timeline = [
	{
		year: "2023",
		desc: "Marcoby launches as a managed IT services company, helping small businesses modernize infrastructure and support.",
		logo: pulseLogo,
	},
	{
		year: "2024",
		desc: "Expands to include licensing, cloud hosting, and web services through Pulse, Marcoby's value-added marketplace.",
		logo: catalystLogo,
	},
	{
		year: "2025",
		desc: "Reorganizes into three focused divisions—Pulse, Catalyst, and Nexus—to deliver a unified business ecosystem. Launches Nexus MVP and begins international expansion.",
		logo: nexusLogo,
	},
];

const servicesList = [
	{
		name: "Pulse",
		description: "Value added reseller platform for hardware, software, and hosting solutions.",
		href: "https://pulse.marcoby.com",
		image: pulseImg,
	},
	{
		name: "Catalyst",
		description: "Managed IT services tailored to businesses of all sizes.",
		href: "https://catalyst.marcoby.com",
		image: catalystImg,
	},
	{
		name: "Nexus",
		description: "Headquarters-as-a-Service platform integrating tools, workflows and insights.",
		href: "https://nexus.marcoby.com",
		image: nexusImg,
	},
];

const About = () => {
	const { hash } = useLocation();
	useEffect(() => {
		if (hash) {
			const id = hash.replace("#", "");
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [hash]);

	return (
		<section className="relative flex flex-col items-center" id="about">
			{/* About Hero Section */}
			<div className="w-full relative h-screen flex flex-col justify-center items-center pt-32 text-center overflow-hidden">
				{/* Video background, matching homepage hero */}
				<video
					autoPlay
					loop
					muted
					className="absolute w-full h-full top-[50%] left-[50%] object-cover -translate-x-[50%] -translate-y-[50%] z-0">
					<source src={bgvideo} type="video/mp4" />
				</video>
				{/* Semi-transparent dark overlay for contrast */}
				<div className="absolute -top-[2px] left-0 w-full h-[101%] bg-[linear-gradient(to_top,rgba(228,240,236,0.95),rgba(228,240,236,0.9),rgba(228,240,236,0.8))] dark:bg-[linear-gradient(to_top,rgba(0,0,0,0.95),rgba(0,0,0,0.9),rgba(0,0,0,0.8))] z-1"></div>
				{/* Animated gradient and skewed overlay, matching homepage hero */}
				<div className="relative z-2 flex flex-col items-center justify-center min-h-[400px] py-16 px-5 md:px-12">
					<Reveal>
						<div className="flex flex-col items-center justify-center gap-y-6 max-w-[600px] text-center gap-3 w-full">
							<img
								src={aboutImg}
								alt="Marcoby Logo"
								className="w-28 h-28 rounded-full shadow-lg border-4 border-white dark:border-gray-800 bg-white mx-auto mb-4"
							/>
							<span className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec]/80 w-fit dark:bg-[#e4f0ec20] mt-2 text-lg mx-auto">
								About Marcoby
							</span>
							<h1 className="text-3xl text-[#00A651] font-Roboto md:leading-[70px] md:text-5xl">
								Empowering Growth. Automating Success.
							</h1>
							<p className="font-Noto text-sm text-gray-600 leading-6 dark:text-gray-400">
								Marcoby is more than a tech company—it's a platform built to help small businesses grow with confidence.
								We simplify operations, strengthen IT foundations, and help businesses scale through thoughtful tools,
								services, and partnerships.
							</p>
						</div>
					</Reveal>
					<ChevronDown className="mt-16 text-gray-600 animate-bounce dark:text-gray-400" />
				</div>
			</div>
			{/* Subsections */}
			<Section bgClassName="bg-gradient-to-br from-[#e4f0ec] via-white to-[#e4f0ec] dark:from-[#1a1a1a] dark:via-black dark:to-[#1a1a1a]">
				{/* Vision, Mission, and Values */}
				<Reveal>
					<div className="flex flex-col items-center text-center gap-5" id="vision">
						<span className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] w-fit dark:bg-[#e4f0ec20]">
							Our Vision, Mission & Values
						</span>
						<h2 className="font-Roboto text-[30px]">Vision, Mission, and Values</h2>
						<p className="text-sm text-gray-600 leading-6 dark:text-gray-400">
							<b>Our Vision:</b>
							<br />
							To be the most trusted partner for small businesses ready to grow with clarity, confidence, and control.
						</p>
						<p className="text-sm text-gray-600 leading-6 dark:text-gray-400">
							<b>Our Mission:</b>
							<br />
							To equip small teams with intuitive technology, simplified operations, and intelligent automation—so they
							can focus on what matters most.
						</p>
						<p className="font-Noto mb-2 text-lg md:text-xl text-gray-700 dark:text-gray-300">
							<b>Our Values:</b>
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2 justify-center">
							{values.map((v) => (
								<div
									key={v.label}
									className="rounded-lg p-6 shadow flex flex-col items-start text-left border border-[#00A651]/10">
									<span className="font-bold text-[#00A651] text-lg font-OpenSans">{v.label}</span>
									<span className="font-Noto text-sm mt-2 text-gray-700 md:text-base dark:text-gray-300">{v.desc}</span>
								</div>
							))}
						</div>
					</div>
				</Reveal>
			</Section>
			<Section bgClassName="bg-white dark:bg-black/80">
				{/* Founder Story */}
				<div className="flex flex-col md:flex-row gap-10 items-center" id="founder">
					<div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
						<div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-[#00A651] shadow-lg bg-white dark:bg-[#181818] md:w-40 md:h-40">
							<User className="w-16 h-16 text-[#00A651]" />
						</div>
					</div>
					<div className="flex flex-col items-center gap-5 md:w-1/2 text-left md:items-start">
						<span className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] dark:bg-[#e4f0ec20] text-sm text-center md:text-left">
							Founder Story
						</span>
						<Reveal>
							<h2 className="font-Roboto text-2xl md:text-3xl text-[#013a1f] dark:text-white font-bold mb-2 text-center md:text-left">
								Why We Started
							</h2>
							<p className="text-gray-700 text-sm leading-7 mb-2 max-w-xl mx-auto dark:text-gray-400">
								Marcoby did not begin with flashy tech or funding. It started with a simple truth:
								<b>most businesses don't fail because they lack talent—they fail because they lack structure.</b>
							</p>
							<p className="text-gray-700 text-sm leading-7 mb-2 max-w-xl mx-auto dark:text-gray-400">
								For over 15 years, Von Jackson worked in IT, supporting businesses of all sizes across industries like
								healthcare, education, retail, legal, and finance. Along the way, he noticed a pattern: business owners
								knew their craft but often struggled to run their business.
							</p>
							<p className="text-gray-700 text-sm leading-7 mb-2 max-w-xl mx-auto dark:text-gray-400">
								That struggle hit close to home—and became the reason Von and his wife Kristin founded Marcoby. What
								began as an IT service evolved into something more: a trusted partner offering platforms and support
								that make operations simpler, smarter, and sustainable.
							</p>
							<p className="italic text-gray-700 text-sm leading-7 mb-2 max-w-xl mx-auto dark:text-gray-400">
								"We created Marcoby because we see the opportunity for businesses to compete and grow when they leverage
								the right technologies and processes."
								<br />— Von Jackson
							</p>
						</Reveal>
					</div>
				</div>
			</Section>
			<Section bgClassName="bg-gradient-to-br from-[#e4f0ec] via-white to-[#e4f0ec] dark:from-[#1a1a1a] dark:via-black dark:to-[#1a1a1a]">
				{/* Timeline */}
				<div className="flex flex-col items-center gap-5 my-10" id="timeline">
					<span className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] dark:bg-[#e4f0ec20] text-sm mb-2">
						Growth Timeline
					</span>
					<h2 className="font-Roboto text-2xl md:text-3xl text-[#013a1f] dark:text-white font-bold mb-6 text-center">
						Timeline of Growth / Milestones
					</h2>
					<Reveal>
						<div className="relative flex flex-col lg:flex-row justify-center items-stretch gap-x-8 gap-y-10 w-full">
							{/* Connector line for desktop */}
							<div className="h-full w-1 left-1/2 top-0 absolute lg:top-1/2 lg:left-0 lg:h-1 lg:w-full bg-[#00A651] z-0" />
							{timeline.map((item, idx) => {
								let Icon = TrendingUp;
								if (item.year === "2023") Icon = Headset;
								else if (item.year === "2024") Icon = BadgeCheck;
								else if (item.year === "2025") Icon = Layers;
								return (
									<div
										key={item.year}
										className="flex relative z-1 flex-col items-center text-center rounded-2xl shadow-lg p-8 flex-1 max-w-xs mx-auto border border-[#00A651]/10 bg-white dark:bg-[#181818]">
										{/* Connector dot */}

										<div className="w-20 h-20 flex items-center justify-center rounded-full shadow bg-white dark:bg-[#e4f0ec20] border-4 border-[#00A651] mb-4">
											<Icon className="w-12 h-12 text-[#00A651]" />
										</div>
										<span className="font-bold text-[#00A651] text-2xl md:text-3xl font-OpenSans mb-2 tracking-wide">
											{item.year}
										</span>
										<p className="text-sm text-gray-700 leading-6 dark:text-gray-400 flex-1 mt-2">{item.desc}</p>
									</div>
								);
							})}
						</div>
					</Reveal>
				</div>
			</Section>
			<Section bgClassName="bg-white dark:bg-black/80">
				{/* Why Marcoby */}
				<div className="flex flex-col-reverse md:flex-row gap-10 items-center" id="why">
					<div className="flex flex-col items-center gap-5 md:w-1/2 text-left md:items-start">
						<span className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] dark:bg-[#e4f0ec20] text-sm text-center md:text-left">
							Why Marcoby?
						</span>
						<Reveal>
							<h2 className="font-Roboto text-2xl md:text-3xl text-[#013a1f] dark:text-white font-bold mb-2 text-center md:text-left">
								Our Difference
							</h2>
							<p className="text-gray-700 text-sm leading-7 mb-2 max-w-xl mx-auto dark:text-gray-400">
								Because we're not just solving IT problems—we're solving business overwhelm.
								<br />
								Most business owners don't need more software—they need the right combination of tools, processes, and
								support. Marcoby delivers exactly that:
							</p>
							<ul className="list-disc ml-5 mb-2 text-gray-700 text-sm leading-7 max-w-xl mx-auto dark:text-gray-400">
								<li>A centralized marketplace for cloud, hardware, and licensing</li>
								<li>Managed IT services tailored to your growth stage</li>
								<li>A business operating system that automates what you don't have time to do</li>
							</ul>
							<p className="text-gray-700 text-sm leading-7 mb-2 max-w-xl mx-auto dark:text-gray-400">
								We help small teams become scalable teams. We partner with founders, not just companies. And we build
								systems that let your business run—even when you're off the clock.
							</p>
						</Reveal>
					</div>
					<div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
						<img
							src={nexusLogo}
							alt="Why Marcoby Illustration"
							className="w-40 h-40 object-contain rounded-xl shadow-lg bg-white dark:bg-[#181818]"
						/>
					</div>
				</div>
				<div className="w-full flex gap-x-3 mt-10">
					<div className="basis-1/2 py-5 rounded-lg flex flex-col justify-center items-center">
						<Reveal>
							<h1 className="font-Roboto text-3xl text-[#00A651]">15+</h1>
							<p className="font-Noto text-xs text-gray-600 dark:text-gray-400">Years Experience</p>
						</Reveal>
					</div>
					<div className="basis-1/2 py-5 rounded-lg flex flex-col justify-center items-center">
						<Reveal>
							<h1 className="font-Roboto text-3xl text-[#00A651]">100+</h1>
							<p className="font-Noto text-xs text-gray-600 dark:text-gray-400">Clients Served</p>
						</Reveal>
					</div>
				</div>
			</Section>
		</section>
	);
};

export default About;
