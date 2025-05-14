import { SquareMousePointer } from "lucide-react";
import React from "react";
import Reveal from "./Reveal";

const NetworkNewsFeed = () => {
	return (
		<Reveal>
			<div className="flex flex-col justify-center items-center gap-y-5 py-16 px-3 w-full">
				<h1 className="font-Roboto text-[30px] md:text-[40px]">Network News Feed</h1>

				<form
					action="submit"
					className="w-full flex flex-col items-start gap-4 md:flex-row md:items-center lg:w-[700px]">
					<div className="relative w-full">
						<input
							type="text"
							className="p-2 peer w-full placeholder-transparent text-black bg-white outline-none caret-black peer border border-gray-200 rounded-md focus:shadow-md dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900"
						/>
						<label
							htmlFor="name"
							className="absolute top-0 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-1 peer-focus:-top-8
								peer-focus:text-gray-800 duration-500 dark:peer-placeholder-shown:text-gray-700 dark:text-gray-700 dark:peer-focus:text-gray-400">
							Enter RSS feed URL
						</label>
					</div>
					<button className="flex justify-center items-center px-5 py-3 rounded-md bg-[#006837] text-xs font-OpenSans text-white hover:bg-[#00A651] duration-300 cursor-pointer">
						<SquareMousePointer className="w-6 h-6 mr-1" />
						Fetch
					</button>
				</form>
			</div>
		</Reveal>
	);
};

export default NetworkNewsFeed;
