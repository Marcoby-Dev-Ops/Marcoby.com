import pool from "../config/db.js";

const getTechCheckService = async () => {
	const result = await pool.query("SELECT * FROM techChecks");
	return result.rows;
};

const createTechCheckService = async (fullname, businessEmail, companyName, helpWith, teamSize) => {
	const result = await pool.query(
		"INSERT INTO techChecks (fullname, businessEmail, companyName, helpWith, teamSize) VALUES ($1, $2, $3, $4, $5) RETURNING *",
		[fullname, businessEmail, companyName, helpWith, teamSize]
	);

	return result.rows[0];
};

export { getTechCheckService, createTechCheckService };
