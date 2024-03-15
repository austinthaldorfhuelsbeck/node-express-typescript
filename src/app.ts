import dotenv from "dotenv";
import express from "express";
import { errorHandler, notFound } from "./errorHandlers";
import { v1Router } from "./v1";
import { setCommonMiddleware } from "./v1/middleware/global.middleware";

dotenv.config();

export const app = express();
setCommonMiddleware(app);

// Route handlers
app.use("/api/v1", v1Router);

// Error handlers
app.use(notFound);
app.use(errorHandler);
