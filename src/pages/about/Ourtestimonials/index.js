"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fa_1 = require("react-icons/fa");
var testimonials = [
    {
        name: "Sarah Albert",
        role: "Customer",
        message: "I was very impressed by the new company service. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
        image: "/images/profile-1.png",
    },
    {
        name: "John Doe",
        role: "Customer",
        message: "I was very impressed by the new company service. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
        image: "/images/profile-2.png",
    },
    {
        name: "Lilly Rowe",
        role: "Customer",
        message: "I was very impressed by the new company service. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
        image: "/images/profile-3.png",
    },
];
var Testimonials = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full py-16", style: { backgroundColor: "#F5F0EA" }, children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto px-4 text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-normal text-gray-500 mb-8", children: "Our Testimonials" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-4xl font-bold mb-12", children: "Customer Feedback" }), (0, jsx_runtime_1.jsx)("div", { className: "grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: testimonials.map(function (testimonial, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 pt-12 rounded-lg shadow-lg flex flex-col justify-between h-full text-left relative", children: [(0, jsx_runtime_1.jsx)(fa_1.FaQuoteLeft, { className: "absolute -top-6 left-6 text-yellow-400 text-3xl" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-600 mt-4 mb-8", children: ["\u201C", testimonial.message, "\u201D"] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-4 mt-auto", children: [(0, jsx_runtime_1.jsx)("img", { src: testimonial.image, alt: testimonial.name, className: "w-12 h-12 rounded-full object-cover" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "font-semibold text-gray-800", children: testimonial.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 text-sm", children: (0, jsx_runtime_1.jsx)("span", { className: "text-[#F6A235]" // Only text color changed here
                                                    , children: testimonial.role }) })] })] })] }, index)); }) })] }) }));
};
exports.default = Testimonials;
