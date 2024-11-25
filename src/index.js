import express from "express";
import Connection from "./config/ConnectDB.js";
import userrouter from "./routes/userroutes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());

Connection(process.env.Mongo_url);


app.use("/user", userrouter);

const PORT = process.env.PORT


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
