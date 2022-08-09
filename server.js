import express from "express";
import { config } from "dotenv";
import dbConnect from "./db.js";
import authRoute from "./routes/auth.js";
import refreshTokenRoute from "./routes/refreshToken.js";
import userRoute from "./routes/users.js";

const app = express();
config();
dbConnect();

app.use(express.json());

app.use("/api", authRoute);
app.use("/api/refreshToken", refreshTokenRoute);
app.use("/api/users", userRoute);

const Port = process.PORT || 8080;

app.listen(Port, () => {
  console.log(`Server running on port : ${Port}`);
});
