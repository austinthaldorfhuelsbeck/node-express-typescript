"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCommonMiddleware = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const setCommonMiddleware = (app) => {
    app.use(express_1.default.json());
    app.set("json spaces", 2);
    app.use((req, res, next) => {
        res.contentType("application/json; charset=utf-8");
        next();
    });
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,X-HTTP-Method-Override,Content-Type,Accept,content-type,application/json");
        next();
    });
    app.use((0, cors_1.default)());
};
exports.setCommonMiddleware = setCommonMiddleware;
