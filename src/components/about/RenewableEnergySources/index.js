"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fa_1 = require("react-icons/fa");
var RenewableEnergyContainer = function () {
    var handleYoutubeClick = function () {
        window.open("https://youtu.be/XHOmBV4js_E?si=0ymrEHEOCZN0Xcce", "_blank");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center text-center px-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-[url('/images/Renewable.jpeg')] bg-cover bg-center brightness-50" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-black opacity-50" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6", children: ["Renewable and Sustainable ", (0, jsx_runtime_1.jsx)("br", {}), " Power Energy Sources"] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleYoutubeClick, className: "text-[#F6A235] hover:text-[#E08F2E] transition duration-300 p-4", "aria-label": "Watch on YouTube", children: (0, jsx_runtime_1.jsx)(fa_1.FaYoutube, { size: 50, className: "sm:size-12 md:size-15 lg:size-20" }) })] })] }));
};
exports.default = RenewableEnergyContainer;
