//package imports
import bcrypt from "bcrypt";

//file imports
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    //these are the inputs that we pass from our frontend
    //these are the frontend values taken from the seignup page when a user signs up
    const { fullName, username, password, confirmPassword, gender } = req.body;

    //check if password matches confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    //basically check if user exists in the database
    //find the document with the inputed username, returns a user or nothing
    //if a user is returned, user=true,
    const user = await User.findOne({ username });

    //checks user varible
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/

    //this will request to an api that respond with a profile picture depending on the username
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      //the only reason we dont say fullName:fullName is because they are of the same name
      //the req.body had something like Name and the model property was fullName,
      //then we would say fullName:Name
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    //just check if the user has been created
    if (newUser) {
      // Generate JWT token here
      generateTokenAndSetCookie(newUser._id, res);

      //save to the database
      await newUser.save();

      //this will be the response after the data has been sent
      //except the password
      res.status(201).json({
        //the _id will be automatically generated
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    //these are the inputs that we pass from our frontend
    //these are the frontend values taken from the login page when a user signs up
    const { username, password } = req.body;

    //define the user and try and find and check if the inputted username exists in the database
    //If the user exists, the user variable will return true AND the data of the
    const user = await User.findOne({ username });

    //isPasswordCorrect will conpare the user inputted password with the password in the database
    //if they match, isPassword correct will return true
    // "|| "" ", this peice of code insures no errors are thrown if the user inputs nothing "null,undefined"
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    // this check will determine if the username or the password is incorrect
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    //Thus all checks are passed and a cookie is set and a token is created
    //and the user is logged in.
    generateTokenAndSetCookie(user._id, res);

    //the server will respond with a status of 200
    //and the details of the user that is logged ins
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//we dont need async, no data is being retrieved we dont need to wait
//all this happens on the client side
export const logout = (req, res) => {
  try {
    // this will remove the cookie
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
