"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hello_controller_1 = __importDefault(require("../controllers/hello.controller"));
const HelloRouter = (0, express_1.Router)();
HelloRouter.get("/", hello_controller_1.default.hello);
exports.default = HelloRouter;
