import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      //this is how we tell mongoose that this is a reference to the "User" model
      //ref will then tell mongoose that the sernder id will be from the user model
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    // createdAt, updatedAt will be made
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
