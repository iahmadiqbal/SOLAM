"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var about_1 = __importDefault(require("./pages/about"));
var contact_1 = __importDefault(require("./pages/contact"));
var home_1 = __importDefault(require("./pages/home"));
var project_1 = __importDefault(require("./pages/project"));
var Services_1 = __importDefault(require("./pages/Services"));
var header_1 = __importDefault(require("./components/header"));
var ourteam_1 = __importDefault(require("./pages/ourteam"));
function App() {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(header_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/about", element: (0, jsx_runtime_1.jsx)(about_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects", element: (0, jsx_runtime_1.jsx)(project_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/services", element: (0, jsx_runtime_1.jsx)(Services_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/ourteam", element: (0, jsx_runtime_1.jsx)(ourteam_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/contact", element: (0, jsx_runtime_1.jsx)(contact_1.default, {}) })] })] }));
}
exports.default = App;
