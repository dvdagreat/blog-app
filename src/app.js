import express from "express";

const getApp = (dependencies) => {
  const app = express();

  app.use("/v1", v1Router(dependencies.v1));

  return app;
};

export default getApp;
