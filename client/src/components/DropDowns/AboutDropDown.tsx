import React, { useRef, useEffect } from "react";
import { aboutList } from "../../utils/about";
import { ChevronRight } from "lucide-react";
import NavDropDown from "../NavDropDown";

const AboutDropDown = ({ onClose }: { onClose?: () => void }) => {
	const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
	const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	let firstLinkAssigned = false;

	useEffect(() => {
		// Focus the first link when dropdown opens
		firstLinkRef.current?.focus();
	}, []);

	const allSublinks = aboutList.flatMap(({ sublinks }) => sublinks);

	const handleKeyDown = (e: React.KeyboardEvent, idx: number, total: number) => {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			const nextIdx = (idx + 1) % total;
			linkRefs.current[nextIdx]?.focus();
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			const prevIdx = (idx - 1 + total) % total;
			linkRefs.current[prevIdx]?.focus();
		} else if (e.key === "Escape" && onClose) {
			e.preventDefault();
			onClose();
		}
	};

	return (
		<NavDropDown positionClass="-left-48" pointerClass="left-[47%]">
			<div role="menu" aria-label="About menu">
				{aboutList.map(({ name, sublinks }) => (
					<div key={name} className="flex-col text-left px-5 py-4 group rounded-lg min-w-fit">
						<h1 className="text-md font-semibold flex items-center">
							{name}
							<ChevronRight className="h-4 w-4" />
						</h1>
						{sublinks.map(({ href, title }, i) => {
							const flatIdx = allSublinks.findIndex(s => s.title === title);
							return (
								<div key={title} className="flex-col">
									<a
										href={href}
										role="menuitem"
										tabIndex={0}
										ref={el => {
											linkRefs.current[flatIdx] = el;
											if (!firstLinkAssigned && flatIdx === 0) {
												firstLinkRef.current = el;
												firstLinkAssigned = true;
											}
										}}
										onKeyDown={e => handleKeyDown(e, flatIdx, allSublinks.length)}
										className="inline-block text-sm min-w-fit my-3 text-black/70 dark:text-white/60 hover:text-black/100 dark:hover:text-white/100 duration-300 focus:outline focus:outline-2 focus:outline-[#00A651]"
									>
										{title}
									</a>
								</div>
							);
						})}
					</div>
				))}
			</div>
		</NavDropDown>
	);
};

export default AboutDropDown;
