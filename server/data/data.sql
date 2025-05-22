CREATE TABLE IF NOT EXISTS techchecks (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL, 
    businessEmail VARCHAR(100) UNIQUE NOT NULL, 
    companyName VARCHAR(100) NOT NULL, 
    helpWith TEXT NOT NULL, 
    teamSize TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS IT_HEALTH (
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
);