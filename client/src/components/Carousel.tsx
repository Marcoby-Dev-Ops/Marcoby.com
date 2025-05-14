import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
	children: React.ReactElement[];
	autoSlide: boolean;
	autoSlideInterval: number;
}

export const Carousel = ({ children, autoSlide, autoSlideInterval }: CarouselProps) => {
	const [current, setCurrent] = useState<number>(0);

	const previous = () => {
		setCurrent((current) => (current === 0 ? children.length - 1 : current - 1));
	};

	const next = () => {
		setCurrent((current) => (current === children.length - 1 ? 0 : current + 1));
	};

	useEffect(() => {
		if (!autoSlide) return;

		const slideInterval = setInterval(next, autoSlideInterval);

		return () => clearInterval(slideInterval);
	}, []);

	return (
		<div className="overflow-hidden md:flex md:flex-col ">
			<div
				className="flex transition-transform ease-out duration-1000"
				style={{ transform: `translateX(-${current * 100}%)`, willChange: "transform" }}>
				{children}
			</div>
			<div className="self-center flex justify-between items-center mt-10 md:max-w-[650px] md:gap-10">
				<ChevronLeft onClick={previous} className="cursor-pointer" />

				<div className="">
					<div className="flex items-center justify-center gap-5">
						{children.map((_, i) => (
							<div
								key={i}
								className={`transition-all w-2 h-2 rounded-full border border-solid border-white ${
									current === i ? "bg-white" : "bg-opacity-40"
								}`}></div>
						))}
					</div>
				</div>

				<ChevronRight onClick={next} className="cursor-pointer" />
			</div>
		</div>
	);
};
