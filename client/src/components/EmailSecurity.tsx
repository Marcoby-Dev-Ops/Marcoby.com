import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const solutions = [
	{
		problem: "Our email is always getting spam or scams.",
		solution: "We block dangerous emails and standardize your email security, so your team stays safe and productive.",
	},
	{
		problem: "We don't know if our data is backed up.",
		solution: "We set up automatic, secure backups and monitor them—so you never have to worry about losing important information.",
	},
	{
		problem: "Our computers are slow or out of date.",
		solution: "We recommend, set up, and maintain the right hardware for your business, making it easy to standardize and scale as you grow.",
	},
	{
		problem: "Software is confusing and hard to manage.",
		solution: "We handle all your software licenses, updates, and support—so your team always has what they need, when they need it.",
	},
	{
		problem: "We don't have anyone to call when tech breaks.",
		solution: "Our support team is always here to help—fast. We keep your business running smoothly, no matter what.",
	},
	{
		problem: "We're not sure if our systems are secure.",
		solution: "We check your setup, close security gaps, and keep your business protected as you grow.",
	},
	{
		problem: "We're growing and need better systems.",
		solution: "We design and build IT systems that scale with your business, so you can grow with confidence and consistency.",
	},
];

const BusinessProblemsWeSolve = () => (
	<section className="solutions-section py-12 bg-white">
		<h2 className="text-2xl font-bold mb-4 text-center">Business Tech Problems We Solve</h2>
		<p className="mb-8 text-center text-gray-700 max-w-2xl mx-auto">
			Marcoby gives your business the power to standardize your technology, scale with confidence, and grow securely. We solve the tech headaches that hold businesses back—so you can focus on what matters most.
		</p>
		<Swiper
			spaceBetween={30}
			slidesPerView={1}
			breakpoints={{
				768: { slidesPerView: 2 },
				1024: { slidesPerView: 3 }
			}}
			loop
			className="max-w-5xl mx-auto"
		>
			{solutions.map((item, idx) => (
				<SwiperSlide key={idx}>
					<div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start border border-gray-100 hover:shadow-lg transition h-full">
						{/* Optional: Add an icon here in the future */}
						<h3 className="font-semibold text-lg mb-2">{item.problem}</h3>
						<p className="text-gray-600">{item.solution}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	</section>
);

export default BusinessProblemsWeSolve;
