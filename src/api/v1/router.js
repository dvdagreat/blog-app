import express, { Router } from "express";

import PostRouter from "./routes/Posts.js";
import UserRouter from "./routes/Users.js";

const MainRouter = (dependencies) => {
  const router = Router();

  router.use(express.json());

  router.use("/posts", PostRouter(dependencies));
  router.use("/users", UserRouter(dependencies));

  return router;
};

export default MainRouter;
