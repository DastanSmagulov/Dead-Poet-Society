import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    inProgress: String,
    // done: {
    //   type: Array,
    //   default: [],
    // },
    // wantToRead: {
    //   type: Array,
    //   default: [],
    // },
    // bookForExchange: {
    //   type: Array,
    //   default: [],
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
