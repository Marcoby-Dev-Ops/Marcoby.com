import React from "react";
import aboutImg from "../assets/images/logo.png";
import herobg from "../assets/aboutbg.mp4";
import Reveal from "./Reveal";

const About = () => {
	return (
		<section className="relative mt-10 flex flex-col py-10 items-center px-5 md:mt-32" id="about">
			<video
				autoPlay
				loop
				muted
				className="absolute w-full h-full top-[50%] left-[50%] object-cover -translate-x-[50%] -translate-y-[50%] z-0">
				<source src={herobg} type="video/mp4" />
			</video>

			<div className="absolute -top-[2px] left-0 w-full h-[101%] bg-[linear-gradient(to_top,rgba(228,240,236,0.95),rgba(228,240,236,0.9),rgba(228,240,236,0.8))] dark:bg-[linear-gradient(to_top,rgba(0,0,0,0.95),rgba(0,0,0,0.9),rgba(0,0,0,0.8))] z-1"></div>

			<div className="relative z-2">
				<Reveal>
					<div className="flex flex-col items-center gap-3 mb-6">
						<h1 className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] w-fit dark:bg-[#e4f0ec20]">
							Our Story
						</h1>
						<p className="font-Roboto text-[30px]">About Marcoby</p>
					</div>
				</Reveal>

				<div className="flex flex-col gap-5 md:flex-row">
					<div className="flex justify-center items-center rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_10px_rgb(17,24,39)] md:basis-[50%]">
						<Reveal>
							<img src={aboutImg} alt="logo" />
						</Reveal>
					</div>
					<div className="basis-[50%] flex leading-6 flex-col text-gray-600 items-start text-sm text-center px-3 gap-y-5 md:items-start md:text-left dark:text-gray-400">
						<Reveal>
							<p>
								Founded in 2021, Marcoby was built on the belief that businesses deserve smarter, more integrated
								solutions to operate, scale, and thrive. With over a decade of experience in IT services, our
								founder—born and raised in Jackson, MS, and now based in Southern California—set out to create more than
								just another tech company. He envisioned a legacy.
							</p>

							<p className="mt-4">
								At Marcoby, you’re technically family. We believe in innovation, integration, and empowerment,
								delivering solutions that make businesses more productive, secure, and scalable. Our mission is simple:
								to revolutionize business operations with intuitive, interconnected technologies that drive long-term
								success.
							</p>
						</Reveal>

						<div className="w-full flex gap-x-3 mt-auto">
							<div className="basis-1/2 py-5 rounded-lg bg-[#e4f0ec] flex flex-col justify-center items-center dark:bg-[#e4f0ec20]">
								<Reveal>
									<h1 className="font-Roboto text-3xl text-[#00A651]">10+</h1>
									<p className="text-xs text-gray-600 dark:text-gray-400">Years Experience</p>
								</Reveal>
							</div>
							<div className="basis-1/2 py-5 rounded-lg bg-[#e4f0ec] flex flex-col justify-center items-center dark:bg-[#e4f0ec20]">
								<Reveal>
									<h1 className="font-Roboto text-3xl text-[#00A651]">100+</h1>
									<p className="text-xs text-gray-600 dark:text-gray-400">Clients Served</p>
								</Reveal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
