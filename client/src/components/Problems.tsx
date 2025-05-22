import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MailWarning, DatabaseBackup, Monitor, Cog, Headset, ShieldAlert, TrendingUp } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Problems.css";
import Section from "./Section";
import { Carousel } from "./Carousel";

const solutions = [
	{
		problem: "Our email is always getting spam or scams.",
		solution: "We block dangerous emails and standardize your email security, so your team stays safe and productive.",
		icon: MailWarning,
	},
	{
		problem: "We don't know if our data is backed up.",
		solution:
			"We set up automatic, secure backups and monitor them—so you never have to worry about losing important information.",
		icon: DatabaseBackup,
	},
	{
		problem: "Our computers are slow or out of date.",
		solution:
			"We recommend, set up, and maintain the right hardware for your business, making it easy to standardize and scale as you grow.",
		icon: Monitor,
	},
	{
		problem: "Software is confusing and hard to manage.",
		solution:
			"We handle all your software licenses, updates, and support—so your team always has what they need, when they need it.",
		icon: Cog,
	},
	{
		problem: "We don't have anyone to call when tech breaks.",
		solution: "Our support team is always here to help—fast. We keep your business running smoothly, no matter what.",
		icon: Headset,
	},
	{
		problem: "We're not sure if our systems are secure.",
		solution: "We check your setup, close security gaps, and keep your business protected as you grow.",
		icon: ShieldAlert,
	},
	{
		problem: "We're growing and need better systems.",
		solution:
			"We design and build IT systems that scale with your business, so you can grow with confidence and consistency.",
		icon: TrendingUp,
	},
];

const BusinessProblemsWeSolve = () => (
	<section className="w-full flex flex-col items-center px-3 py-16 bg-white dark:bg-black/80">
		<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#013a1f] dark:text-white">
			Business Tech Problems We Solve
		</h2>
		<p className="mb-10 text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-6">
			Marcoby gives your business the power to standardize your technology, scale with confidence, and grow securely. We
			solve the tech headaches that hold businesses back—so you can focus on what matters most.
		</p>
		<Carousel autoSlide={true} autoSlideInterval={7000}>
			{solutions.map((item, idx) => {
				const Icon = item.icon;
				return (
					<div key={idx} className="flex justify-between w-full px-4">
						<div className="bg-white dark:bg-[#181818] rounded-2xl shadow-lg p-8 flex flex-col items-center border border-[#e4f0ec] dark:border-[#222] transition-all duration-300 h-[400px] w-full max-w-[370px] mx-auto group">
							<div className="flex flex-col flex-1 w-full justify-between items-center h-full">
								<div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#e4f0ec] dark:bg-[#232323] group-hover:scale-110 transition-transform duration-300">
									<Icon className="w-8 h-8 text-[#00A651]" />
								</div>
								<h3 className="font-Roboto text-base md:text-lg font-semibold text-[#013a1f] dark:text-white mb-4 text-center">
									{item.problem}
								</h3>
								<p className="text-sm leading-6 text-gray-700 dark:text-gray-300 text-center flex-1 flex items-center justify-center">
									{item.solution}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</Carousel>
	</section>
);

export default BusinessProblemsWeSolve;
