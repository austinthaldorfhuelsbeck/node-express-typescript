"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = __importDefault(require("express"));
const errorHandlers_1 = require("../errorHandlers");
const hello_router_1 = __importDefault(require("./routes/hello.router"));
exports.v1Router = (0, express_1.default)();
// Route handlers
exports.v1Router.use("/hello", hello_router_1.default);
// Error handlers
exports.v1Router.use(errorHandlers_1.notFound);
exports.v1Router.use(errorHandlers_1.errorHandler);
