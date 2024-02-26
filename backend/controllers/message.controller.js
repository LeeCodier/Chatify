//file imports
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    //takes user input from form
    const { message } = req.body;

    //gets the reciever id, this will be the Id of the person you want to send the mesage to eg. message/send/recieverid
    //this is the same as const id = req.params.id but now id is destructured from the params object and renamed receiverId
    const { id: receiverId } = req.params;

    //get sender id from currently authenticated user this comes from the cookies
    //which comes from the protectRoute middleware
    const senderId = req.user._id;

    //find the conversation between the two users
    let conversation = await Conversation.findOne({
      //finds a conver sation where a particapants ids match all these feilds
      //the fields being the senders id and receivers id
      participants: { $all: [senderId, receiverId] },
    });

    //if the conversation does not exist,  create one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        //by defualt the messages model will have an empty array if there are no messages
        //so no message create is needed
      });
    }

    //this will create the message coming from the user
    //the message data will put into the Message schema
    const newMessage = new Message({
      senderId,
      receiverId,
      //this comes from req.body
      message,
    });

    //if the message is created push the message id into the conversations array
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //Socket io stuff will be here

    //this saves all conversation and message object into the database
    //Pomise.all runs both methods in parrallel
    // await conversation.save();
    // await newMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    //userToChatId will be the id of the person u sent the messages to
    const { id: userToChatId } = req.params;

    //get sender id from currently authenticated user this comes from the cookies
    //which comes from the protectRoute middleware
    const senderId = req.user._id;

    //conversation will find a conversation with the same ids as the participants,senderId and userToChatId
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //.populate will take the reference of the messages by there id and return the actual messages

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
