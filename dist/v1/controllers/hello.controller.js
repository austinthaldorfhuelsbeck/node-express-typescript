"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_service_1 = __importDefault(require("../services/hello.service"));
const hello = async (req, res, next) => {
    try {
        const { message } = await hello_service_1.default.helloWorld();
        res.json({ message });
    }
    catch (error) {
        next(error);
    }
};
const HelloController = {
    hello,
};
exports.default = HelloController;
