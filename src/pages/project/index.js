"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var projects_1 = __importDefault(require("../../components/projects"));
var SolarServiceTabs_1 = __importDefault(require("../../components/projects/SolarServiceTabs"));
var footer_1 = __importDefault(require("../../components/home/footer"));
var Project = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(projects_1.default, {}), (0, jsx_runtime_1.jsx)(SolarServiceTabs_1.default, {}), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
};
exports.default = Project;
