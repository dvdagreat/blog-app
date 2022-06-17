import express from "express";
import v1Router from "./api/v1/router.js";

const getApp = (dependencies) => {
  const app = express();

  app.use("/v1", v1Router(dependencies.v1));

  return app;
};

export default getApp;
