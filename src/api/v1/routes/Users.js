import { Router } from "express";

import UserController from "../controllers/Users.js";

const UserRouter = (dependencies) => {
  const router = Router();

  router.post("/login", (req, res) => {
    UserController.login(req, res, dependencies);
  });

  router.post("/register", (req, res) => {
    UserController.register(req, res, dependencies);
  });

  return router;
};

export default UserRouter;
