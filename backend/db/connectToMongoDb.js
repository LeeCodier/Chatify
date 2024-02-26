import mongoose from "mongoose";

//this variable will constain an  async arrow function that opens a connection to
// Mongo database,
const connectToMongoDB = async () => {
  try {
    //this will pause the program and wait for the connect method to
    //open a connection
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
