import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    //this will get the token from the cookies
    //this is possible the cookieParser package and using it as middleware in the server
    const token = req.cookies.jwt;

    //if check
    //if there is no token, undefined or equal to zero, return false
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    //decode the token
    //the verify method will use the current token and the signed jwt secret in the env variable to decode and verify the token
    //the verify method will return false if the secret matches the own signed to the token
    //if not false will be returned
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //if check
    //false is returned, error is returned as responses
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    //the user variable will find the user by decontructed userId used to sign the token in generateToken function in utils
    //this is the user data we have in our database now minus the passowrd
    const user = await User.findById(decoded.userId).select("-password");

    //if there is no user return an error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    //the 'user' will be currently authenticated and linked the user on the database
    req.user = user;

    //this will run the next function ,
    //sendMessage or getMessage from the messages controller
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
