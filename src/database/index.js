import UserModel from "./models/Users";
import UserDatabaseWrapper from "./abstraction/Users";

import PostModel from "./models/Posts";
import PostDatabaseWrapper from "./abstraction/Posts";

export default {
  posts: new PostDatabaseWrapper(PostModel),
  users: new UserDatabaseWrapper(UserModel),
};
