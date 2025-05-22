import pool from "../config/db.js";

const createTechCheckTable = async () => {
	const queryText = `CREATE TABLE IF NOT EXISTS techchecks (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL, 
    businessEmail VARCHAR(100) UNIQUE NOT NULL, 
    companyName VARCHAR(100) NOT NULL, 
    helpWith TEXT NOT NULL, 
    teamSize TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW()
)`;

	try {
		await pool.query(queryText);
		console.log("TechCheck table created");
	} catch (error) {
		console.log("Error creating TechCheck table", error);
	}
};

export default createTechCheckTable;
