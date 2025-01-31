import express from "express";
import { PORT, mongourl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

//Middleware for parsing req body
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome");
});

//middleware for handling cors policy

app.use(cors());

//Middleware to handle requests with prefix of
app.use("/books", booksRoute);

app.use("/user", userRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("App connected to data base");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("App is listening");
});
