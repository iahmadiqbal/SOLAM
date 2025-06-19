"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var SolarHeroSection = function () {
    var _a = (0, react_1.useState)(false), clicked = _a[0], setClicked = _a[1];
    var handleBoxClick = function () {
        setClicked(true);
    };
    return ((0, jsx_runtime_1.jsxs)("section", { className: "relative py-40 px-6 text-left bg-cover bg-center bg-no-repeat bg-[url('/images/SolarHeroSection.jpg')]", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0" }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { y: -80, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.8, ease: "easeOut" }, className: "relative flex flex-col items-start justify-center h-full pl-6 md:pl-12", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-xl md:text-2xl font-bold text-[#FFFFFF] mb-4", children: "Solar Panel Installation Solution" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-4xl md:text-6xl lg:text-8xl text-[#FFFFFF] mb-2", children: "Powering Homes" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-4xl md:text-6xl lg:text-8xl text-[#FFFFFF]", children: (0, jsx_runtime_1.jsx)("div", { className: "text-[#FFFFFF] font-semibold", children: "With Solar Panels" }) }), (0, jsx_runtime_1.jsx)("button", { className: "self-start bg-[#F6A235] hover:bg-[#9A9A9A] text-white px-8 py-4 transition duration-300 mt-6", children: "Discover More" })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 1, ease: "easeOut", delay: 0.5 }, onClick: handleBoxClick, className: "absolute left-1/2 transform -translate-x-1/2 translate-y-10 w-[80%] sm:w-[60%] md:w-[700px] h-40 text-[#FFFFFF] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold flex items-center justify-center rounded-2xl shadow-2xl border border-white cursor-pointer transition duration-300 ".concat(clicked ? "hover:bg-[#F6A235]" : "bg-transparent"), children: (0, jsx_runtime_1.jsx)("span", { className: "tracking-[0.7em]", children: "ENERGY" }) })] }));
};
exports.default = SolarHeroSection;
