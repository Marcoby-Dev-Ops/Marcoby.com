const calculateScore = (answers) => {
	let score = 100;
	if (answers.backup === "No" || answers.backup === "Not sure") score -= 25;
	if (answers.updates === "Rarely" || answers.updates === "Not sure") score -= 20;
	if (answers.downtime === "Yes") score -= 15;
	if (answers.mfa === "No" || answers.mfa === "Not sure") score -= 25;
	if (answers.challenge === "Security") score -= 10;
	return Math.max(score, 0);
};

const generateRecommendations = (answers) => {
	const recs = [];
	if (answers.backup === "No" || answers.backup === "Not sure") {
		recs.push("Implement a backup and disaster recovery plan.");
	}
	if (answers.updates === "Rarely" || answers.updates === "Not sure") {
		recs.push("Regularly update all your software.");
	}
	if (answers.downtime === "Yes") {
		recs.push("Investigate recent downtime and set up monitoring.");
	}
	if (answers.mfa === "No" || answers.mfa === "Not sure") {
		recs.push("Enable multi-factor authentication.");
	}
	if (answers.challenge === "Security") {
		recs.push("Invest in advanced cybersecurity measures.");
	}
	return recs.length ? recs : ["You're in great shape! Keep following best practices."];
};

export { generateRecommendations, calculateScore };
