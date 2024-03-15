"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.methodNotAllowed = exports.errorHandler = void 0;
const isAnErrorStatus = (object) => {
    return "status" in object && "message" in object;
};
const errorHandler = (err, req, res, next) => {
    if (isAnErrorStatus(err)) {
        res.status(err.status).json({ error: err });
    }
    else if (err instanceof Error) {
        res.status(500).json({ error: { status: 500, message: err.message } });
    }
    else if (err) {
        res.status(500).json({ error: { message: String(err) } });
    }
    else {
        res.status(500).json({ error: { message: "Something went wrong!" } });
    }
};
exports.errorHandler = errorHandler;
const methodNotAllowed = (req, res) => {
    res.status(405).json({
        error: { message: `${req.method} not allowed for ${req.originalUrl}.` },
    });
};
exports.methodNotAllowed = methodNotAllowed;
const notFound = (req, res) => {
    res.status(404).json({
        error: { message: `Resource not found: ${req.originalUrl}.` },
    });
};
exports.notFound = notFound;
