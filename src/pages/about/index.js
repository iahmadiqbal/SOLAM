"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var about_1 = __importDefault(require("../../components/about"));
var RenewableEnergySources_1 = __importDefault(require("../../components/about/RenewableEnergySources"));
var SolarEssentials_1 = __importDefault(require("../../components/about/SolarEssentials"));
var SolarTeamWork_1 = __importDefault(require("../../components/about/SolarTeamWork"));
var EnergyAwareness_1 = __importDefault(require("../../components/home/EnergyAwareness"));
var footer_1 = __importDefault(require("../../components/home/footer"));
var KeyMetrics_1 = __importDefault(require("../../components/home/KeyMetrics"));
var ProfessionalTeam_1 = __importDefault(require("../../components/home/ProfessionalTeam"));
var Ourtestimonials_1 = __importDefault(require("./Ourtestimonials"));
var About = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(about_1.default, {}), (0, jsx_runtime_1.jsx)(SolarEssentials_1.default, {}), (0, jsx_runtime_1.jsx)(EnergyAwareness_1.default, {}), (0, jsx_runtime_1.jsx)(KeyMetrics_1.default, {}), (0, jsx_runtime_1.jsx)(RenewableEnergySources_1.default, {}), (0, jsx_runtime_1.jsx)(Ourtestimonials_1.default, {}), (0, jsx_runtime_1.jsx)(SolarTeamWork_1.default, {}), (0, jsx_runtime_1.jsx)(ProfessionalTeam_1.default, {}), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
};
exports.default = About;
