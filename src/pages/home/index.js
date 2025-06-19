"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var home_1 = __importDefault(require("../../components/home"));
var EnergyAwareness_1 = __importDefault(require("../../components/home/EnergyAwareness"));
var footer_1 = __importDefault(require("../../components/home/footer"));
var IntroSection_1 = __importDefault(require("../../components/home/IntroSection"));
var KeyMetrics_1 = __importDefault(require("../../components/home/KeyMetrics"));
var OurServices_1 = __importDefault(require("../../components/home/OurServices"));
var ProfessionalTeam_1 = __importDefault(require("../../components/home/ProfessionalTeam"));
var ProjectShowcase_1 = __importDefault(require("../../components/home/ProjectShowcase"));
var WhyChooseSolar_1 = __importDefault(require("../../components/home/WhyChooseSolar"));
var Home = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(home_1.default, {}), (0, jsx_runtime_1.jsx)(IntroSection_1.default, {}), (0, jsx_runtime_1.jsx)(OurServices_1.default, {}), (0, jsx_runtime_1.jsx)(ProjectShowcase_1.default, {}), (0, jsx_runtime_1.jsx)(EnergyAwareness_1.default, {}), (0, jsx_runtime_1.jsx)(KeyMetrics_1.default, {}), (0, jsx_runtime_1.jsx)(WhyChooseSolar_1.default, {}), (0, jsx_runtime_1.jsx)(ProfessionalTeam_1.default, {}), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
};
exports.default = Home;
