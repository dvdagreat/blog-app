import Hashing from "./Hash.js";
import PostServices from "./Posts.js";
import Response from "./Response.js";
import Token from "./Token.js";
import UserServices from "./Users.js";
import Validation from "./Validation.js";

export default {
  posts: PostServices,
  users: UserServices,
  hash: Hashing,
  validation: Validation,
  token: Token,
  response: Response,
};
