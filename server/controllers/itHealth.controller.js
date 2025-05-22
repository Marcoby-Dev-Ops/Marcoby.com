import { getITHealthService, createITtHealthService } from "../models/itHealth.model.js";
import { calculateScore, generateRecommendations } from "../services/itHealth.service.js";
import { handleResponse } from "./techCheck.controller.js";

const createITtHealth = async (req, res, next) => {
	const { email, companyName, employees, backup, updates, downtime, mfa, challenge, industry, score, recommendations } =
		req.body;

	const answers = {
		employees,
		backup,
		updates,
		downtime,
		mfa,
		challenge,
		industry,
	};

	try {
		const score = calculateScore(answers);
		const recommendations = generateRecommendations(answers);
		const newITHealth = await createITtHealthService(email, companyName, answers, score, recommendations);

		handleResponse(res, 201, "Your entries have been submitted!", newITHealth);
	} catch (error) {
		next(error);
	}
};

const getITHealth = async (_, res, next) => {
	try {
		const itHealthList = await getITHealthService();
		handleResponse(res, 200, "Data fetched successfully", itHealthList);
	} catch (err) {
		next(err);
	}
};

export { createITtHealth, getITHealth };
