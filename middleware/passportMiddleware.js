"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const PassportConfig_1 = __importDefault(require("./PassportConfig"));
const localStrategy_1 = __importDefault(require("./passportStrategies/localStrategy"));
// import passportGitHubStrategy from "./passportStrategies/githubStrategy";
const passportConfig = new PassportConfig_1.default([localStrategy_1.default /* passportGitHubStrategy */]);
const passportMiddleware = (app) => {
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
};
exports.default = passportMiddleware;
