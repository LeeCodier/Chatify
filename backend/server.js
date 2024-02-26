//packege imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//file imports
import connectToMongoDb from "./db/connectToMongoDb.js";

//file imports-routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

//variables
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

//middleware, allow you to extract  fields from the request body, req.body
// to parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());
//this will allow us to access and parse cookies and get a token from them
app.use(cookieParser());

//middleware- whenver anything in the auth route is called, authRoutes will be called a
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello Worldd  ss!");
// });

app.listen(PORT, () => {
  //this will run the connectToMondoDb async function
  connectToMongoDb();
  console.log(`Server Running on port ${PORT}`);
});
