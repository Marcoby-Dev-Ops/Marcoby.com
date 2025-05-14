import React from "react";
import Reveal from "./Reveal";
import { Shield } from "lucide-react";

const EmailSecurity = () => {
	const protocolList = [
		{
			name: "DMARC",
			description:
				"Domain-based Message Authentication Reporting & Conformance ensures email authenticity and reduces spam risks.",
			icon: <Shield className="w-8 h-8" />,
		},
		{
			name: "SPF",
			description:
				"Sender Policy Framework verifies which sender can email on behalf of a domain, improving delivarability.",
			icon: <Shield className="w-8 h-8" />,
		},
		{
			name: "DKIM",
			description:
				"Domain Keys Identified Mail uses public/private key signatures to verify email intergrity and protect against phishing.",
			icon: <Shield className="w-8 h-8" />,
		},
	];
	return (
		<section className="pt-10 pb-20 flex flex-col items-center px-3 md:pt-32">
			<Reveal>
				<h1 className="font-Roboto text-[30px] text-[#00A651] md:text-[40px]">Email Security Protocols</h1>
			</Reveal>

			<div className="flex flex-col max-w-[1200px] mx-auto gap-y-7 gap-x-7 mt-20 md:flex-row">
				{protocolList.map((protocol, index) => (
					<div
						key={index}
						className="flex flex-col items-start p-5 gap-4 border-none rounded-md basis-[33.3%] shadow-[0px_0px_8px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_10px_rgb(17,24,39)]">
						<Reveal>
							<div className="text-[#00A651]">{protocol.icon}</div>
						</Reveal>
						<Reveal>
							<h1 className="font-Roboto">{protocol.name}</h1>
						</Reveal>
						<Reveal>
							<p className="text-xs text-gray-600 leading-5 dark:text-gray-400">{protocol.description}</p>
						</Reveal>
					</div>
				))}
			</div>
		</section>
	);
};

export default EmailSecurity;
