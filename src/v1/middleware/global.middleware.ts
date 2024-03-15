import cors from "cors";
import express from "express";

export const setCommonMiddleware = (app: express.Application) => {
  app.use(express.json());
  app.set("json spaces", 2);
  app.use((req, res, next) => {
    res.contentType("application/json; charset=utf-8");
    next();
  });
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,X-HTTP-Method-Override,Content-Type,Accept,content-type,application/json"
    );
    next();
  });
  app.use(cors());
};
