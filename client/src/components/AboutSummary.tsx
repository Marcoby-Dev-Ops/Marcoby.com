import { Award } from "lucide-react";
import herobg from "../assets/aboutbg.mp4";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const AboutSummary = () => {
	return (
		<section className="relative flex flex-col py-10 items-center px-5" id="about">
			<video
				autoPlay
				loop
				muted
				className="absolute w-full h-full top-[50%] left-[50%] object-cover -translate-x-[50%] -translate-y-[50%] z-0">
				<source src={herobg} type="video/mp4" />
			</video>

			<div className="absolute -top-[2px] left-0 w-full h-[101%] bg-[linear-gradient(to_top,rgba(228,240,236,0.95),rgba(228,240,236,0.9),rgba(228,240,236,0.8))] dark:bg-[linear-gradient(to_top,rgba(0,0,0,0.95),rgba(0,0,0,0.9),rgba(0,0,0,0.8))] z-1"></div>

			<div className="relative z-2 flex flex-col items-center justify-center min-h-[400px] py-16 px-4 md:px-12">
				<Reveal>
					<div className="flex flex-col items-center gap-3 w-full max-w-xl text-center">
						<div className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg border-4 border-white dark:border-gray-800 bg-white mx-auto">
							<Award className="w-12 h-12 text-[#00A651]" />
						</div>
						<h2 className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec]/80 w-fit dark:bg-[#e4f0ec20] mt-2 text-lg mx-auto">
							About Marcoby
						</h2>
						<p className="font-Roboto text-2xl md:text-3xl font-bold drop-shadow mb-2">
							Empowering Growth. Automating Success.
						</p>
						<p className="text-gray-700 text-sm leading-7 mb-2 drop-shadow max-w-xl mx-auto dark:text-gray-400">
							Marcoby is more than a tech company—it's a platform built to help small businesses grow with confidence.
							We simplify operations, strengthen IT foundations, and help businesses scale through thoughtful tools,
							services, and partnerships.
						</p>
						<Link
							to="/about"
							className="mt-4 px-5 py-2 rounded-full bg-[#00A651] text-white text-sm font-semibold shadow hover:bg-[#008f4c] transition-colors">
							Learn more
						</Link>
					</div>
				</Reveal>
			</div>
		</section>
	);
};

export default AboutSummary;
