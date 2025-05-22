import React from "react";
import { ecosystemList } from "../../utils/ecosystem";

const EcosystemDropDownSS = () => {
	return (
		<div className="flex flex-col">
			{ecosystemList.map(({ name, sublinks }) => (
				<div key={name} className="flex-col px-5 py-4 group rounded-lg">
					<h1 className="text-md font-semibold">{name}</h1>
					{sublinks.map(({ href, title }) => (
						<div key={title} className="flex-col">
							<a
								href={href}
								target="_blank"
								className="inline-block text-sm min-w-fit my-2 text-black/70 dark:text-white/60 hover:text-black/100 dark:hover:text-white/100 duration-300">
								{title}
							</a>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default EcosystemDropDownSS;
