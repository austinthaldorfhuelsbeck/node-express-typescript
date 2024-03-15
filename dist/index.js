"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config();
if (!process.env.PORT) {
    throw new Error("Missing required environment variables.");
}
const PORT = parseInt(process.env.PORT, 10);
app_1.app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
