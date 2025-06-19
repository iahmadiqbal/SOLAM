"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var services = [
    {
        src: "images/roof.jpg",
        alt: "Tile & Metal Roof",
        heading: "Installations",
        title: "Tile & Metal Roof",
        subtitle: "Installations",
    },
    {
        src: "images/solarinspection.jpg",
        alt: "Commercial Solar",
        heading: "Consulting",
        title: "Commercial Solar",
        subtitle: "Inspections",
    },
    {
        src: "images/solarResearchDeveloperment.jpg",
        alt: "Solar Research",
        heading: "Case Studies",
        title: "Solar Research",
        subtitle: "Development",
    },
    {
        src: "images/solarpanelinstallation.jpg",
        alt: "Solar Panel",
        heading: "Installations",
        title: "Solar Panel",
        subtitle: "Installation",
    },
    {
        src: "images/image5.jpg",
        alt: "Sample Image 5",
        heading: "Case Studies",
        title: "Innovation Study",
        subtitle: "Testing",
    },
    {
        src: "images/image6.jpg",
        alt: "Sample Image 6",
        heading: "Consulting",
        title: "Sample Project 6",
        subtitle: "Energy Audit",
    },
];
var tabs = ["All", "Case Studies", "Consulting", "Installations"];
var SolarServiceTabs = function () {
    var _a = (0, react_1.useState)("All"), selectedTab = _a[0], setSelectedTab = _a[1];
    var filteredServices = selectedTab === "All"
        ? __spreadArray([], new Map(services.map(function (item) { return ["".concat(item.heading, "-").concat(item.title), item]; })).values(), true) : services.filter(function (item) { return item.heading === selectedTab; });
    return ((0, jsx_runtime_1.jsxs)("section", { className: "py-10 mt-20", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap justify-center gap-4 mb-8", children: tabs.map(function (tab) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return setSelectedTab(tab); }, className: "px-4 py-2 text-sm font-medium rounded-full transition duration-300 ".concat(selectedTab === tab
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-yellow-500 hover:text-white"), children: tab }, tab)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8", children: filteredServices.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "relative group w-full h-72 overflow-hidden shadow-lg", children: [(0, jsx_runtime_1.jsx)("img", { src: item.src, alt: item.alt, className: "w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60" }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute bottom-0 left-0 w-full p-5 text-white bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-8 h-1 bg-yellow-400" }), (0, jsx_runtime_1.jsx)("h4", { className: "text-base font-medium", children: item.heading }), (0, jsx_runtime_1.jsxs)("h3", { className: "text-2xl font-bold leading-snug", children: [item.title, item.subtitle && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("br", {}), item.subtitle] }))] }), (0, jsx_runtime_1.jsx)("button", { className: "mt-4 inline-flex items-center justify-center p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition", children: (0, jsx_runtime_1.jsx)(fi_1.FiArrowRight, { className: "text-xl" }) })] })] }, index)); }) })] }));
};
exports.default = SolarServiceTabs;
