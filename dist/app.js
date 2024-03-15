"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const errorHandlers_1 = require("./errorHandlers");
const v1_1 = require("./v1");
const global_middleware_1 = require("./v1/middleware/global.middleware");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
(0, global_middleware_1.setCommonMiddleware)(exports.app);
// Route handlers
exports.app.use("/api/v1", v1_1.v1Router);
// Error handlers
exports.app.use(errorHandlers_1.notFound);
exports.app.use(errorHandlers_1.errorHandler);
