import { Router } from "express";

import fetchJWTUserData from "../../../middleware/fetchJwtUserInfo.js";
import PostController from "../controllers/Posts.js";

const PostRouter = (dependencies) => {
  const router = Router();

  router.get("/", (req, res) => {
    PostController.getPosts(req, res, dependencies);
  });

  router.post("/", (req, res) => {
    PostController.createPost(req, res, dependencies);
  });

  router.put("/:id", (req, res) => {
    PostController.updatePost(req, res, dependencies);
  });

  router.delete("/:id", (req, res) => {
    PostController.deletePost(req, res, dependencies);
  });

  return router;
};

export default PostRouter;
