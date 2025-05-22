import React, { useState, useEffect } from "react";

interface ITHealthCheckProps {
	inlineButton?: boolean;
}

const QUESTIONS = [
	{
		id: "employees",
		question: "How many employees use company devices?",
		options: ["1-5", "6-20", "21-50", "50+"],
		required: true,
		hint: "Knowing your team size helps us assess your risk exposure and recommend the right IT solutions for your business growth.",
	},
	{
		id: "backup",
		question: "Do you have a backup and disaster recovery plan?",
		options: ["Yes", "No", "Not sure"],
		required: true,
		hint: "A solid backup plan protects your business from costly data loss and downtime.",
	},
	{
		id: "updates",
		question: "How often do you update your software?",
		options: ["Automatically", "Manually", "Rarely", "Not sure"],
		required: true,
		hint: "Regular updates keep your business secure and running smoothly, reducing vulnerabilities.",
	},
	{
		id: "downtime",
		question: "Have you experienced downtime in the last 6 months?",
		options: ["Yes", "No", "Not sure"],
		required: true,
		hint: "Downtime can cost your business money and reputation. Identifying causes helps prevent future issues.",
	},
	{
		id: "mfa",
		question: "Do you use multi-factor authentication?",
		options: ["Yes", "No", "Not sure"],
		required: true,
		hint: "MFA is a simple way to protect your business from cyber threats and unauthorized access.",
	},
	{
		id: "challenge",
		question: "What's your biggest IT challenge right now?",
		options: ["Security", "Productivity", "Cost", "Compliance", "Other"],
		required: true,
		hint: "Understanding your main challenge helps us tailor solutions that drive your business forward.",
	},
	{
		id: "industry",
		question: "What industry are you in?",
		options: ["Professional Services", "Healthcare", "Finance", "Retail", "Education", "Other"],
		required: true,
		hint: "Industry-specific insights allow us to benchmark your IT health and provide relevant recommendations.",
	},
];

const API_URL = import.meta.env.VITE_API_URL_IT_HEALTH;

const ITHealthCheck: React.FC<ITHealthCheckProps> = ({ inlineButton }) => {
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState<{ [key: string]: string }>({});
	const [email, setEmail] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [emailError, setEmailError] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");
	const [result, setResult] = useState<any>(null);
	const [showModal, setShowModal] = useState(false);
	const [showButton, setShowButton] = useState(false);

	// Show the button after scrolling past the first viewport
	useEffect(() => {
		if (inlineButton) {
			setShowButton(true);
			return;
		}
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight * 0.8) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [inlineButton]);

	const handleOptionSelect = (option: string) => {
		setAnswers({ ...answers, [QUESTIONS[step].id]: option });
		setError("");
	};

	const handleNext = () => {
		if (!answers[QUESTIONS[step].id]) {
			setError("Please select an option to continue.");
			return;
		}
		setStep((prev) => prev + 1);
	};

	const handleBack = () => {
		setStep((prev) => prev - 1);
		setError("");
	};

	const validateEmail = (email: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = async () => {
		if (!validateEmail(email)) {
			setEmailError("Please enter a valid business email.");
			return;
		}
		setEmailError("");
		setSubmitting(true);
		setError("");
		try {
			const response = await fetch(API_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...answers, email, companyName }),
			});
			if (!response.ok) {
				throw new Error("Submission failed. Please try again.");
			}
			const data = await response.json();
			setResult(data.data);
		} catch (err: any) {
			setError(err.message || "Something went wrong.");
		} finally {
			setSubmitting(false);
		}
	};

	useEffect(() => {
		if (showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [showModal]);

	// Modal content
	const modalContent = (
		<div
			className="bg-gray-50 dark:bg-[#181818] rounded-xl shadow-2xl border border-green-200 dark:border-green-900 p-0 animate-fade-in w-full max-w-lg flex flex-col"
			style={{ maxWidth: "95vw" }}>
			<div className="flex justify-between items-center px-4 md:px-6 pt-4 pb-2 border-b border-gray-100 dark:border-[#272727]">
				<h2 className="font-Roboto text-lg md:text-xl font-bold text-green-700 dark:text-green-400">
					Business IT Health Check
				</h2>
				<button
					onClick={() => setShowModal(false)}
					className="text-gray-400 hover:text-red-500 text-2xl font-bold cursor-pointer">
					&times;
				</button>
			</div>
			<div className="px-4 py-10 md:px-6 flex-1 overflow-y-auto">
				{result ? (
					<div className="text-center">
						<h3 className="text-xl font-extrabold mb-4 text-green-700 dark:text-green-400">
							Your IT Health Check Results
						</h3>
						<p className="mb-2 font-semibold text-base">
							IT Health Score: <span className="text-green-700 dark:text-green-400">{result.score ?? "—"}/100</span>
						</p>
						<ul className="text-left mb-4">
							{result.recommendations?.map((rec: string, idx: number) => (
								<li key={idx} className="mb-1">
									• {rec}
								</li>
							))}
						</ul>
						<a
							href="https://marcoby.com/book-consultation"
							className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-800 transition text-sm mt-4">
							Book a Free Consultation
						</a>
					</div>
				) : step < QUESTIONS.length ? (
					<>
						<div className="mb-2 text-gray-700 dark:text-gray-200 font-semibold">
							Step {step + 1} of {QUESTIONS.length}
						</div>
						<div className="mb-4">
							<p className="mb-2 text-sm font-semibold font-OpenSans">{QUESTIONS[step].question}</p>
							<p className="mb-4 text-sm text-gray-500 dark:text-gray-400 italic">{QUESTIONS[step].hint}</p>
							<div className="flex flex-col gap-2">
								{QUESTIONS[step].options.map((option) => (
									<button
										key={option}
										className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-150 focus:outline-none cursor-pointer ${
											answers[QUESTIONS[step].id] === option
												? "bg-green-700 text-white border-green-700 shadow"
												: "bg-gray-100 dark:bg-[#181818] border-gray-300 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-green-900"
										}`}
										onClick={() => handleOptionSelect(option)}>
										{option}
									</button>
								))}
							</div>
						</div>
						{error && <div className="text-red-600 mb-2">{error}</div>}
						<div className="flex justify-between mt-4">
							<button
								onClick={handleBack}
								disabled={step === 0}
								className="px-4 py-2 rounded-full text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 font-medium cursor-pointer">
								Back
							</button>
							<button
								onClick={handleNext}
								className="px-4 py-2 rounded-full text-sm bg-green-700 text-white hover:bg-green-800 font-medium cursor-pointer">
								Next
							</button>
						</div>
					</>
				) : (
					<>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-1">Company Name (optional)</label>
							<input
								type="text"
								className="w-full px-4 py-2 border rounded-full mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
								placeholder="Your Company Name"
								value={companyName}
								onChange={(e) => setCompanyName(e.target.value)}
								disabled={submitting}
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-1">Business Email</label>
							<input
								type="email"
								className="w-full px-4 py-2 border rounded-full mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
								placeholder="you@business.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={submitting}
							/>
						</div>
						{emailError && <div className="text-red-600 mb-2">{emailError}</div>}
						{error && <div className="text-red-600 mb-2">{error}</div>}
						<button
							onClick={handleSubmit}
							disabled={submitting}
							className="w-full px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 font-semibold text-sm mt-2 cursor-pointer">
							{submitting ? "Submitting..." : "Get My Report"}
						</button>
					</>
				)}
			</div>
		</div>
	);

	return (
		<>
			{showButton && !showModal && (
				<button
					className={
						inlineButton
							? "bg-green-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm hover:bg-green-800 transition cursor-pointer"
							: "fixed z-40 bottom-4 right-4 left-4 md:left-auto md:bottom-8 md:right-8 bg-green-700 text-white px-4 py-3 md:px-6 rounded-full shadow-lg font-semibold text-sm md:text-base hover:bg-green-800 transition animate-bounce w-auto md:w-auto cursor-pointer"
					}
					style={inlineButton ? {} : { maxWidth: "calc(100vw - 2rem)" }}
					onClick={() => setShowModal(true)}>
					Run a Business Checkup
				</button>
			)}
			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-2 md:items-end md:justify-end md:bg-transparent md:pr-8 md:pb-8 pointer-events-none">
					<div className="pointer-events-auto w-full max-w-lg">{modalContent}</div>
				</div>
			)}
		</>
	);
};

export default ITHealthCheck;
