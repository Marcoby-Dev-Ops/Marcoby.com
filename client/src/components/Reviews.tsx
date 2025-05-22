import React from "react";
import { Carousel } from "./Carousel";
import reviews from "../utils/review";

const Reviews = () => {
	return (
		<div className="self-stretch flex overflow-hidden mt-6 pt-10 pb-20 flex-col items-center px-3 md:pt-32">
			<Carousel autoSlide={true} autoSlideInterval={3000}>
				{reviews.map(({ name, review, picture }, index) => (
					<div key={index} className="px-2 flex min-w-full items-center justify-center">
						<div className="flex flex-col items-center text-center py-5 px-4 max-w-[650px] bg-gray-900 rounded-[28px] gap-6">
							<div className="rounded-full h-20 w-20 bg-[#006837]"></div>
							<h1 className="">{name}</h1>
							<p className="text-sm">{review}</p>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Reviews;
