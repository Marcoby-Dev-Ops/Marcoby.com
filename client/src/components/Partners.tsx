import React from "react";
import { Link } from "react-router-dom";
import atlassian from "../assets/svgs/atlassian.svg";
import fortinet from "../assets/svgs/fortinet-logo.svg";
import hubspot from "../assets/svgs/hubspot.svg";
import intuitreal from "../assets/svgs/intuitreal.svg";
import lenovo from "../assets/svgs/lenovo-1.svg";
import microsoft from "../assets/svgs/microsoft-6.svg";

const Partners = () => {
	return (
		<div className="flex overflow-hidden pt-10">
			<div className="flex min-w-full justify-around items-center py-5 px-2 gap-x-6 animate-slide">
				<div className="max-w-none">
					<img src={atlassian} alt="atlassian" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={fortinet} alt="fortinet" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={hubspot} alt="hubspot" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={intuitreal} alt="intuitreal" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={lenovo} alt="lenovo" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={microsoft} alt="microsoft" width={150} height={70} />
				</div>
			</div>

			{/* Duplicate */}

			<div className="flex min-w-full justify-around items-center py-5 px-2 gap-x-6 animate-slide">
				<div className="max-w-none">
					<img src={atlassian} alt="atlassian" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={fortinet} alt="fortinet" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={hubspot} alt="hubspot" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={intuitreal} alt="intuitreal" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={lenovo} alt="lenovo" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={microsoft} alt="microsoft" width={150} height={70} />
				</div>
			</div>
		</div>
	);
};

export default Partners;
