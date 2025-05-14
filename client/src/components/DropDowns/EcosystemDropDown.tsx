import React from "react";
import { ecosystemList } from "../../utils/ecosystem";
import { ChevronRight } from "lucide-react";
import NavDropDown from "../NavDropDown";

const EcosystemDropDown = () => {
	return (
		<NavDropDown positionClass="-left-[340px]" pointerClass="left-[43%]">
			{ecosystemList.map(({ name, sublinks }) => (
				<div key={name} className="flex-col text-left px-5 py-4 group rounded-lg min-w-fit">
					<h1 className="text-md font-semibold flex items-center">
						{name}
						<ChevronRight className="h-4 w-4" />
					</h1>
					{sublinks.map(({ href, title }) => (
						<div key={title} className="flex-col">
							<a
								href={href}
								target="_blank"
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

export default EcosystemDropDown;
