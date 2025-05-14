import React from "react";
import { learnList } from "../../utils/learn.ts";
import { ChevronRight } from "lucide-react";
import NavDropDown from "../NavDropDown.tsx";

const LearnDropDown = () => {
	return (
		<NavDropDown positionClass="-left-96" pointerClass="left-[58%]">
			{learnList.map(({ name, sublinks }) => (
				<div key={name} className="flex-col text-left px-5 py-4 group rounded-lg min-w-fit">
					<h1 className="text-md font-semibold flex items-center">
						{name}
						<ChevronRight className="h-4 w-4" />
					</h1>
					{sublinks.map(({ href, title }) => (
						<div key={title} className="flex-col">
							<a
								href={href}
								className="inline-block text-sm min-w-fit my-3 text-black/70 dark:text-white/60 hover:text-black/100 dark:hover:text-white/100 duration-300">
								{title}
							</a>
						</div>
					))}
				</div>
			))}
		</NavDropDown>
	);
};

export default LearnDropDown;
