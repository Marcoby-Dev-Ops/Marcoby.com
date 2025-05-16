import pool from "../config/db.js";

const createTechCheckTable = async () => {
	const queryText = `ALTER TABLE techChecks ADD COLUMN referrer TEXT`;

	try {
		await pool.query(queryText);
		console.log("TechCheck table created");
	} catch (error) {
		console.log("Error creating TechCheck table", error);
	}
};

export default createTechCheckTable;
