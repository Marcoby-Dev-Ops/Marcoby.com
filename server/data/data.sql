CREATE TABLE IF NOT EXISTS techchecks (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL, 
    businessEmail VARCHAR(100) UNIQUE NOT NULL, 
    companyName VARCHAR(100) NOT NULL, 
    helpWith TEXT NOT NULL, 
    teamSize TEXT NOT NULL,
    referrer TEXT,
    createdAt TIMESTAMP DEFAULT NOW()

)