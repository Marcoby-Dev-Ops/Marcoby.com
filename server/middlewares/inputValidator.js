import Joi from "joi";

const techCheckSchema = Joi.object({
	fullname: Joi.string().min(4).required(),
	businessEmail: Joi.string().email().required(),
	companyName: Joi.string().min(3).allow("", null),
	helpWith: Joi.string()
		.valid(
			"Hosting & Domains",
			"IT Support / Managed Services",
			"Business Automation",
			"Tool Consolidation",
			"Not sure yet"
		)
		.required(),
	teamSize: Joi.string().valid("1-5", "6-20", "21-50", "50+").allow("", null),
});

const validateTechCheck = (req, res, next) => {
	const { error } = techCheckSchema.validate(req.body);

	if (error)
		return res.status(400).json({
			status: 400,
			message: error.details[0].message,
		});

	next();
};

export default validateTechCheck;
