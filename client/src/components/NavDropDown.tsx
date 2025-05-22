import React from "react";

interface NavDropDownProps {
	children: React.ReactNode;
	positionClass: string;
	pointerClass: string;
}

const NavDropDown = ({ children, positionClass, pointerClass }: NavDropDownProps) => {
	return (
		<div className={`hidden top-5 min-w-max absolute bg-transparent peer-hover:flex hover:flex pt-7 ${positionClass}`}>
			<div className={`flex py-3 px-5 bg-gray-50 shadow-lg rounded-lg items-start text-left dark:bg-[#181818]`}>
				<div className={`absolute rotate-45 bg-gray-50 top-5 w-5 h-5 dark:bg-[#181818] ${pointerClass}`}></div>
				{children}
			</div>
		</div>
	);
};

export default NavDropDown;
