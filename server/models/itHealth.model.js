import pool from "../config/db.js";

const getITHealthService = async () => {
	const result = await pool.query("SELECT * FROM IT_HEALTH");
	return result.rows;
};

const createITtHealthService = async (email, companyName, answers, score, recommendations) => {
	const result = await pool.query(
		`INSERT INTO IT_HEALTH 
          (email, companyname, employees, backup, updates, downtime, mfa, challenge, industry, score, recommendations) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)  RETURNING *`,
		[
			email,
			companyName,
			answers.employees,
			answers.backup,
			answers.updates,
			answers.downtime,
			answers.mfa,
			answers.challenge,
			answers.industry,
			score,
			recommendations,
		]
	);

	return result.rows[0];
};

export { getITHealthService, createITtHealthService };
