import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    //this will hold the ids of the users involved in the conversations
    participants: [
      {
        //this is how we tell mongoose that this is a reference to the "User" model
        //ref will then tell mongoose that the sernder id will be from the user model
        //this will be an array of the participants user ids
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
