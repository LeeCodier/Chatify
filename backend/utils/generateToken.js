import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  //creates a token
  //deconstructed user id , the jwt secret environmental variable
  // and the expiary data is the payload
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // MS //max age that coocke should live
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
