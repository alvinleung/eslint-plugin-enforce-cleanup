"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
// src/index.ts
const call_cleanup_1 = __importDefault(require("./rules/call-cleanup"));
const implement_cleanup_1 = __importDefault(require("./rules/implement-cleanup"));
exports.rules = {
    "call-cleanup": call_cleanup_1.default,
    "implement-cleanup": implement_cleanup_1.default,
};
