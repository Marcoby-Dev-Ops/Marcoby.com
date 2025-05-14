import React from "react";
import ninjaone from "../assets/svgs/ninjaone.svg";
import nordpass from "../assets/svgs/nordpass.svg";
import paypal from "../assets/svgs/paypal-3.svg";
import sentinelone from "../assets/svgs/sentinelone-logo.svg";
import stripe from "../assets/svgs/stripe-4.svg";

const Partners2 = () => {
	return (
		<div className="flex overflow-hidden pb-10">
			<div className="flex min-w-full justify-around items-center py-5 px-2 gap-x-6 animate-slideRight">
				<div className="max-w-none">
					<img src={ninjaone} alt=" ninja one" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={nordpass} alt=" nord pass" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={paypal} alt="paypal" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={sentinelone} alt=" sentinelone" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={stripe} alt=" stripe" width={130} height={50} />
				</div>
			</div>

			{/* Duplicate */}

			<div className="flex min-w-full justify-around items-center py-3 px-2 gap-x-6 animate-slideRight">
				<div className="max-w-none">
					<img src={ninjaone} alt=" ninja one" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={nordpass} alt=" nord pass" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={paypal} alt="paypal" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={sentinelone} alt=" sentinelone" width={150} height={70} />
				</div>
				<div className="max-w-none">
					<img src={stripe} alt=" stripe" width={150} height={70} />
				</div>
			</div>
		</div>
	);
};

export default Partners2;
