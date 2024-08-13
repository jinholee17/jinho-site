"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../src/styles/App.css");
var website_1 = __importDefault(require("./pages/website"));
/**
 * Main program that starts the program front end
 */
/**
 * A function that reders the entire APP in the top level.
 *
 * @returns The entire Map app and its relative components
 */
function App() {
    return (0, jsx_runtime_1.jsx)(website_1.default, {});
}
exports.default = App;
