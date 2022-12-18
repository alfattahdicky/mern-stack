import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
const app = express();
const PORT = 8085;
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD API" });
});

app.use(userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
