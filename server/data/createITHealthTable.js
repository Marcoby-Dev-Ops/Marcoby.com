import pool from "../config/db.js";

const createItHealthTable = async () => {
	const queryText = `CREATE TABLE IF NOT EXISTS IT_HEALTH (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  companyName VARCHAR(100),
  employees VARCHAR(50),
  backup VARCHAR(50),
  updates VARCHAR(50),
  downtime VARCHAR(50),
  mfa VARCHAR(50),
  challenge VARCHAR(50),
  industry VARCHAR(50),
  score INT,
  recommendations TEXT[],
  submitted_at TIMESTAMP DEFAULT NOW()
);`;

	try {
		await pool.query(queryText);
		console.log("IT Health Check table created");
	} catch (error) {
		console.error("Error creating IT Health Check table:", error);
	}
};

export default createItHealthTable;
