import Hashing from "./Hash";
import PostServices from "./Posts";
import Response from "./Response";
import Token from "./Token";
import UserServices from "./Users";
import Validation from "./Validation";

export default {
  posts: PostServices,
  users: UserServices,
  hash: Hashing,
  validation: Validation,
  token: Token,
  response: Response,
};
