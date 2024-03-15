import express from "express";
import { errorHandler, notFound } from "../errorHandlers";
import HelloRouter from "./routes/hello.router";

export const v1Router = express();

// Route handlers
v1Router.use("/hello", HelloRouter);

// Error handlers
v1Router.use(notFound);
v1Router.use(errorHandler);
