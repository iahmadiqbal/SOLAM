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
var fa_1 = require("react-icons/fa");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("zod");
var zod_2 = require("@hookform/resolvers/zod");
// Zod Schema
var formSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "Name is required"),
    email: zod_1.z.string().email("Invalid email"),
    subject: zod_1.z.string().min(3, "Subject is required"),
    message: zod_1.z.string().min(10, "Message must be at least 10 characters"),
});
var ConnectWithUs = function () {
    var _a = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_2.zodResolver)(formSchema),
    }), register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.formState.errors, reset = _a.reset;
    var onSubmit = function (data) {
        localStorage.setItem("contactForm", JSON.stringify(data));
        alert("Message saved to local storage!");
        reset();
    };
    return ((0, jsx_runtime_1.jsx)("section", { className: "w-full bg-white pt-0 pb-12 px-4 lg:px-20", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-lg space-y-4 text-gray-700", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-6 border-t-2 border-[#F6A235] my-4" }), (0, jsx_runtime_1.jsx)("div", { className: "w-8 border-l-2 border-blue-600 my-4" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-xl md:text-xl text-gray-600 mb-4", children: "Get in Touch" }), (0, jsx_runtime_1.jsx)("p", { className: "text-4xl font-bold text-gray-800 mb-6", children: "Schedule a Quote" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 mb-6", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2 text-left", children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)(fa_1.FaPhoneAlt, { className: "inline font-bold mr-2 text-blue-600" }), (0, jsx_runtime_1.jsx)("strong", { className: "font-bold", children: "Phone:" }), " (123) 456-7890"] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)(fa_1.FaEnvelope, { className: "inline font-bold mr-2 text-blue-600" }), (0, jsx_runtime_1.jsx)("strong", { className: "font-bold", children: "Email:" }), " needhelp@company.com"] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)(fa_1.FaMapMarkerAlt, { className: "inline font-bold mr-2 text-blue-600" }), (0, jsx_runtime_1.jsx)("strong", { className: "font-bold", children: "Address:" }), " 60 Brooklyn Street, New York, USA"] })] })] }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-6 bg-[#FAF5EF] p-8 rounded-lg shadow-lg", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", __assign({ type: "text", placeholder: "Your Name" }, register("name"), { className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })), errors.name && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm", children: errors.name.message }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", __assign({ type: "email", placeholder: "Your Email" }, register("email"), { className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", __assign({ type: "text", placeholder: "Your Subject" }, register("subject"), { className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })), errors.subject && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm", children: errors.subject.message }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("textarea", __assign({ rows: 5, placeholder: "Your Message" }, register("message"), { className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })), errors.message && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm", children: errors.message.message }))] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition", children: "Send Message" })] })] }) }));
};
exports.default = ConnectWithUs;
