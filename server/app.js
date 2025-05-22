import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import techCheckRoute from "./routes/techcheck.route.js";
import itHealthRoute from "./routes/itHealth.route.js";
import errorHandling from "./middlewares/errorHandler.js";
import createTechCheckTable from "./data/createTechCheckTable.js";
import createItHealthTable from "./data/createITHealthTable.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/techCheck", techCheckRoute);
app.use("/itHealth", itHealthRoute);

// Error Handling
app.use(errorHandling);

// Creating tables
createTechCheckTable();
createItHealthTable();

app.listen(PORT, () => {
	console.log("Server is running on PORT:" + PORT);
});
