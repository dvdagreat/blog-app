import { Router } from "express";

import PostRouter from "./routes/Posts";
import UserRouter from "./routes/Users";

const MainRouter = (dependencies) => {
  const router = Router();

  router.use("/posts", PostRouter(dependencies));
  router.use("/users", UserRouter(dependencies));

  return router;
};

export default MainRouter;
