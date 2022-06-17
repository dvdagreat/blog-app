import mongoose from "mongoose";

import UserModel from "./models/Users.js";
import UserDatabaseWrapper from "./abstraction/Users.js";

import PostModel from "./models/Posts.js";
import PostDatabaseWrapper from "./abstraction/Posts.js";

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/tatva-blog-app");
    console.log("connected to db");
  } catch (err) {
    console.log("cannot connect to db");
  }
}

connectToDatabase();

export default {
  posts: new PostDatabaseWrapper(PostModel),
  users: new UserDatabaseWrapper(UserModel),
};
