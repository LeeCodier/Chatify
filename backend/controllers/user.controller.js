import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    //this comes from protectRoute which takes to id of the currently uthenticated user
    const loggedInUserId = req.user._id;

    //find every user in the database
    //{
    //   _id: { $ne: loggedInUserId },
    // } will filterout the currently authenticated user so you can not see yourself or message yourself
    //take it out if u dont want that
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    //select("-password ") will not return the users passwords

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
