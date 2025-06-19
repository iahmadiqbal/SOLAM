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
var MetricCard = function (_a) {
    var number = _a.number, title = _a.title, description = _a.description, icon = _a.icon;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mt-5 flex flex-col items-center justify-center p-4 min-h-[300px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center mb-4 relative", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-8xl font-extrabold text-[#FFFFFF] relative z-10", children: number }), (0, jsx_runtime_1.jsx)("img", { src: icon, alt: title, className: "w-12 h-12 absolute right-0 top-[-20%] transform translate-x-2" })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold text-black mt-2", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "text-center text-gray-600 mt-1", children: description })] }));
};
var KeyMetrics = function () {
    var metrics = [
        {
            number: 68,
            title: "Panels Installed",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "images/circle-icon-1.png",
        },
        {
            number: 54,
            title: "Technical Support",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "images/circle-icon-2.png",
        },
        {
            number: 33,
            title: "Years Experience",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "images/circle-icon-3.png",
        },
        {
            number: 88,
            title: "Five Star Reviews",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "images/circle-icon-4.png",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-[#F8F3EF] py-12 px-4", children: (0, jsx_runtime_1.jsx)("div", { className: "max-w-7xl mx-auto flex flex-wrap justify-between gap-6", children: metrics.map(function (metric, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "flex-1 min-w-[250px]", children: (0, jsx_runtime_1.jsx)(MetricCard, __assign({}, metric)) }, index)); }) }) }));
};
exports.default = KeyMetrics;
