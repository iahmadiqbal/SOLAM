"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var MotionDiv = framer_motion_1.motion.div;
var MotionH2 = framer_motion_1.motion.h2;
var MotionP = framer_motion_1.motion.p;
var MotionImg = framer_motion_1.motion.img;
var EnergyAwareness = function (_a) {
    var _b = _a.heading, heading = _b === void 0 ? "Ecological Way" : _b, _c = _a.title, title = _c === void 0 ? "Reshaping Energy for the Future" : _c, _d = _a.description, description = _d === void 0 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." : _d, _e = _a.feature1Icon, feature1Icon = _e === void 0 ? "images/ReducedailyEnergy.png" : _e, _f = _a.feature1Title, feature1Title = _f === void 0 ? "Reduce Your Daily Energy Use" : _f, _g = _a.feature1Text, feature1Text = _g === void 0 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit." : _g, _h = _a.feature2Icon, feature2Icon = _h === void 0 ? "images/TheMostusedEnergysystem.png" : _h, _j = _a.feature2Title, feature2Title = _j === void 0 ? "The Most Used Energy Systems" : _j, _k = _a.feature2Text, feature2Text = _k === void 0 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit." : _k, _l = _a.mainImage, mainImage = _l === void 0 ? "images/EnergyReshapping.jpg" : _l;
    var motionProps = {
        initial: { x: -200 },
        animate: { x: 0 },
        transition: { duration: 0.6 },
    };
    var motionImageProps = {
        initial: { x: 200 },
        animate: { x: 0 },
        transition: { duration: 0.6 },
    };
    return ((0, jsx_runtime_1.jsxs)("section", { className: "flex flex-col md:flex-row items-start justify-between py-12 px-6 bg-[#FAF5EF]", children: [(0, jsx_runtime_1.jsxs)(MotionDiv, __assign({ className: "md:w-1/2 w-full text-left" }, motionProps, { children: [(0, jsx_runtime_1.jsx)("div", { className: "w-9 border-t-2 border-[#F7A235] mb-4" }), (0, jsx_runtime_1.jsx)(MotionH2, { className: "text-xl font-normal text-[#333] mb-4", initial: { x: -200 }, animate: { x: 0 }, transition: { duration: 0.6, delay: 0.2 }, children: heading }), (0, jsx_runtime_1.jsx)(MotionP, { className: "text-4xl font-bold text-[#333] mb-6", initial: { x: -200 }, animate: { x: 0 }, transition: { duration: 0.6, delay: 0.4 }, children: title.split("\n").map(function (line, index) { return ((0, jsx_runtime_1.jsxs)("span", { children: [line, (0, jsx_runtime_1.jsx)("br", {})] }, index)); }) }), (0, jsx_runtime_1.jsx)(MotionP, { className: "text-xl font-normal text-gray-600 mb-8", initial: { x: -200 }, animate: { x: 0 }, transition: { duration: 0.6, delay: 0.6 }, children: description }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row justify-between mb-8 space-y-6 md:space-y-0", children: [(0, jsx_runtime_1.jsxs)(MotionDiv, { className: "md:w-1/2 w-full", initial: { x: -200 }, animate: { x: 0 }, transition: { duration: 0.6, delay: 0.8 }, children: [(0, jsx_runtime_1.jsxs)("span", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)(MotionImg, { src: feature1Icon, alt: "Feature 1 Icon", className: "w-8 h-8 mb-2" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold text-center", children: feature1Title.split("\n").map(function (line, index) { return ((0, jsx_runtime_1.jsxs)("span", { children: [line, (0, jsx_runtime_1.jsx)("br", {})] }, index)); }) })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-normal text-1xl text-center", children: feature1Text.split("\n").map(function (line, index) { return ((0, jsx_runtime_1.jsxs)("span", { children: [line, (0, jsx_runtime_1.jsx)("br", {})] }, index)); }) })] }), (0, jsx_runtime_1.jsxs)(MotionDiv, { className: "md:w-1/2 w-full", initial: { x: -200 }, animate: { x: 0 }, transition: { duration: 0.6, delay: 1 }, children: [(0, jsx_runtime_1.jsxs)("span", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)(MotionImg, { src: feature2Icon, alt: "Feature 2 Icon", className: "w-8 h-8 mb-2" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold text-center", children: feature2Title.split("\n").map(function (line, index) { return ((0, jsx_runtime_1.jsxs)("span", { children: [line, (0, jsx_runtime_1.jsx)("br", {})] }, index)); }) })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-center", children: feature2Text.split("\n").map(function (line, index) { return ((0, jsx_runtime_1.jsxs)("span", { children: [line, (0, jsx_runtime_1.jsx)("br", {})] }, index)); }) })] })] })] })), (0, jsx_runtime_1.jsx)(MotionDiv, __assign({ className: "md:w-1/2 w-full" }, motionImageProps, { children: (0, jsx_runtime_1.jsx)(MotionImg, { src: mainImage, alt: "Energy Systems", className: "w-full h-auto object-cover" }) }))] }));
};
exports.default = EnergyAwareness;
