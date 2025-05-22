import { createTechCheckService, getTechCheckService } from "../models/techCheck.model.js";

export const handleResponse = (res, status, message, data = null) => {
	res.status(status).json({
		status,
		message,
		data,
	});
};

const createTechCheck = async (req, res, next) => {
	const { fullname, businessEmail, companyName, helpWith, teamSize } = req.body;

	try {
		const newTechCheck = await createTechCheckService(fullname, businessEmail, companyName, helpWith, teamSize, req);
		handleResponse(res, 201, "Details has been sent successfully", newTechCheck);
	} catch (err) {
		next(err);
	}
};

const getTechCheck = async (req, res, next) => {
	try {
		const userList = await getTechCheckService();
		handleResponse(res, 200, "Tech Checks fetched successfully", userList);
	} catch (err) {
		next(err);
	}
};

export { createTechCheck, getTechCheck };
