"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var footer_1 = __importDefault(require("../../components/home/footer"));
var EnergySaverTabs_1 = __importDefault(require("../../components/services/EnergySaverTabs"));
var SolarInstall_1 = __importDefault(require("../../components/services/SolarInstall"));
var Services = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(EnergySaverTabs_1.default, {}), (0, jsx_runtime_1.jsx)(SolarInstall_1.default, {}), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
};
exports.default = Services;
