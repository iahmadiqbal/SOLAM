"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ConnectWithUs_1 = __importDefault(require("../../components/contact/ConnectWithUs"));
var ContactMap_1 = __importDefault(require("../../components/contact/ContactMap"));
var NeedAssistance_1 = __importDefault(require("../../components/contact/NeedAssistance"));
var footer_1 = __importDefault(require("../../components/home/footer"));
var Contact = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NeedAssistance_1.default, {}), (0, jsx_runtime_1.jsx)(ContactMap_1.default, {}), (0, jsx_runtime_1.jsx)(ConnectWithUs_1.default, {}), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
};
exports.default = Contact;
