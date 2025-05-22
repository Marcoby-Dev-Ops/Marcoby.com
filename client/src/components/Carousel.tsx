import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
	children: React.ReactElement[];
	autoSlide: boolean;
	autoSlideInterval: number;
}

export const Carousel = ({ children, autoSlide, autoSlideInterval }: CarouselProps) => {
	const [current, setCurrent] = useState<number>(0);
	const [itemsPerView, setItemsPerView] = useState<number>(1);

	// Set items per view based on screen size
	const updateItemsPerView = () => {
		const width = window.innerWidth;
		if (width >= 1440) setItemsPerView(3);
		else if (width >= 976) setItemsPerView(2);
		else setItemsPerView(1);
	};

	useEffect(() => {
		updateItemsPerView();
		window.addEventListener("resize", updateItemsPerView);
		return () => window.removeEventListener("resize", updateItemsPerView);
	}, []);

	const totalPages = Math.ceil(children.length / itemsPerView);

	const previous = () => {
		setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
	};

	const next = () => {
		setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
	};

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, [autoSlide, autoSlideInterval, itemsPerView]);

	// Group children into slides
	const grouped = Array.from({ length: totalPages }, (_, index) =>
		children.slice(index * itemsPerView, index * itemsPerView + itemsPerView)
	);

	return (
		<div className="overflow-hidden w-full flex flex-col">
			<div
				className="flex transition-transform ease-out duration-1000"
				style={{
					width: `${100 * totalPages}%`,
					transform: `translateX(-${(100 / totalPages) * current}%)`,
				}}>
				{grouped.map((group, i) => (
					<div key={i} className="flex w-full justify-center" style={{ width: `${100 / totalPages}%` }}>
						{group.map((child, j) => (
							<div key={j} className={`px-4 flex justify-center`} style={{ width: `${100 / itemsPerView}%` }}>
								{child}
							</div>
						))}
					</div>
				))}
			</div>

			{/* Dots & Navigation */}
			<div className="self-center flex justify-between items-center mt-10 md:max-w-[650px] md:gap-10">
				<ChevronLeft onClick={previous} className="cursor-pointer text-[#006837]" />
				<div className="flex items-center justify-center gap-5 mx-4">
					{grouped.map((_, i) => (
						<div
							key={i}
							className={`transition-all w-2 h-2 rounded-full border border-solid border-[#006837]" ${
								current === i ? "bg-[#006837]" : "bg-opacity-40"
							}`}></div>
					))}
				</div>
				<ChevronRight onClick={next} className="cursor-pointer text-[#006837]" />
			</div>
		</div>
	);
};
