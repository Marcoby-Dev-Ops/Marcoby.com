import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import techCheckRoute from "./routes/techcheck.route.js";
import errorHandling from "./middlewares/errorHandler.js";
import createTechCheckTable from "./data/createTechCheckTable.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/techCheck", techCheckRoute);

// Error Handling
app.use(errorHandling);

// Creating a techCheck table
createTechCheckTable();

app.listen(PORT, () => {
	console.log("Server is running on PORT:" + PORT);
});
