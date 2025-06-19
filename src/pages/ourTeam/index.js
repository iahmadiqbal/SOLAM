"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var footer_1 = __importDefault(require("../../components/home/footer"));
var MeetTheTeam_1 = __importDefault(require("../../components/ourTeam/MeetTheTeam"));
var SolarLeaders_1 = __importDefault(require("../../components/ourTeam/SolarLeaders"));
function OurTeam() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SolarLeaders_1.default, {}), (0, jsx_runtime_1.jsx)(MeetTheTeam_1.default, {}), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
}
exports.default = OurTeam;
