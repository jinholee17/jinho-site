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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var aboutme_1 = __importDefault(require("./aboutme"));
var home_1 = __importDefault(require("./home"));
var cosmic_connection_1 = __importDefault(require("./cosmic_connection"));
var lockin_1 = __importDefault(require("./lockin"));
var ignitecs_1 = __importDefault(require("./ignitecs"));
var Section;
(function (Section) {
    Section["HOME"] = "HOME";
    Section["ABOUTME"] = "ABOUTME";
    Section["COSMIC"] = "COSMIC";
    Section["LOCKIN"] = "LOCKIN";
    Section["IGNITE"] = "IGNITE";
})(Section || (Section = {}));
function Website() {
    var _a = (0, react_1.useState)(Section.HOME), section = _a[0], setSection = _a[1];
    function scrollToTop(props) {
        return __awaiter(this, void 0, void 0, function () {
            var targetDiv, targetOffset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setSection(props)];
                    case 1:
                        _a.sent();
                        if (props == Section.ABOUTME) {
                            targetDiv = document.getElementById("back-home-button");
                        }
                        else {
                            targetDiv = document.getElementById("hello-text");
                        }
                        if (targetDiv != null) {
                            targetOffset = targetDiv.offsetTop - 50;
                            window.scrollTo({
                                top: targetOffset,
                                behavior: "instant",
                            });
                        }
                        else {
                            console.error("Could not find target div");
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), (0, jsx_runtime_1.jsxs)("header", __assign({ className: "website-top-header" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: "home-button", id: "home-button", "aria-label": "Home Button", onClick: function () { return scrollToTop(Section.HOME); } }, { children: "Jinho Lee" })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "aboutme-button", "aria-label": "aboutme button", onClick: function () { return scrollToTop(Section.ABOUTME); } }, { children: "about me" })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "email-button", "aria-label": "email button", onClick: function () { return window.open("mailto:jinho_lee@brown.edu", "_blank"); } }, { children: (0, jsx_runtime_1.jsx)("img", { className: "email-image", src: "/static/images/email.png" }) })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "linkedin-button", "aria-label": "linkedin button", onClick: function () {
                            return window.open("https://www.linkedin.com/in/jinho-lee-23a30b217/", "_blank");
                        } }, { children: (0, jsx_runtime_1.jsx)("img", { className: "linkedin-image", src: "/static/images/linkedin.png" }) })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "resume-button", "aria-label": "resume button", onClick: function () {
                            return window.open("https://docs.google.com/document/d/16JF5fy8F_anR5J0NW3DCHFrc5VUXDOtn/edit?usp=sharing&ouid=104602903123943446095&rtpof=true&sd=true", "_blank");
                        } }, { children: (0, jsx_runtime_1.jsx)("img", { className: "resume-image", src: "/static/images/resume.png" }) }))] })), section === Section.HOME ? (0, jsx_runtime_1.jsx)(home_1.default, { setSection: setSection }) : null, section === Section.ABOUTME ? (0, jsx_runtime_1.jsx)(aboutme_1.default, { setSection: setSection }) : null, section === Section.COSMIC ? ((0, jsx_runtime_1.jsx)(cosmic_connection_1.default, { setSection: setSection })) : null, section === Section.LOCKIN ? (0, jsx_runtime_1.jsx)(lockin_1.default, { setSection: setSection }) : null, section === Section.IGNITE ? (0, jsx_runtime_1.jsx)(ignitecs_1.default, { setSection: setSection }) : null, (0, jsx_runtime_1.jsxs)("header", __assign({ className: "website-bottom-header" }, { children: [(0, jsx_runtime_1.jsx)("p", __assign({ className: "thanks-text" }, { children: "thanks for stopping by!" })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "aboutme-button", "aria-label": "aboutme button", onClick: function () {
                            scrollToTop(Section.ABOUTME);
                        } }, { children: "about me" })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "email-button", "aria-label": "email button", onClick: function () { return window.open("mailto:jinho_lee@brown.edu", "_blank"); } }, { children: (0, jsx_runtime_1.jsx)("img", { className: "email-image", src: "/static/images/email.png" }) })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "linkedin-button", "aria-label": "linkedin button", onClick: function () {
                            return window.open("https://www.linkedin.com/in/jinho-lee-23a30b217/", "_blank");
                        } }, { children: (0, jsx_runtime_1.jsx)("img", { className: "linkedin-image", src: "/static/images/linkedin.png" }) })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "resume-button", "aria-label": "resume button", onClick: function () {
                            return window.open("https://docs.google.com/document/d/16JF5fy8F_anR5J0NW3DCHFrc5VUXDOtn/edit?usp=sharing&ouid=104602903123943446095&rtpof=true&sd=true", "_blank");
                        } }, { children: (0, jsx_runtime_1.jsx)("img", { className: "resume-image", src: "/static/images/resume.png" }) }))] }))] }));
}
exports.default = Website;
