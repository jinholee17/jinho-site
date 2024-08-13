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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Section;
(function (Section) {
    Section["HOME"] = "HOME";
    Section["ABOUTME"] = "ABOUTME";
    Section["COSMIC"] = "COSMIC";
    Section["LOCKIN"] = "LOCKIN";
    Section["IGNITE"] = "IGNITE";
})(Section || (Section = {}));
export default function Ignite(props) {
    function scrollToPortfolio() {
        return __awaiter(this, void 0, void 0, function () {
            var targetDiv, targetOffset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, props.setSection(Section.HOME)];
                    case 1:
                        _a.sent();
                        targetDiv = document.getElementById("lighter-purple-bg");
                        if (targetDiv != null) {
                            targetOffset = targetDiv.offsetTop - 40;
                            window.scrollTo({
                                top: targetOffset,
                                behavior: "auto",
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
    return (_jsxs("div", { className: "ignite-page", children: [_jsx("button", { className: "back-home-button", id: "back-home-button", "aria-label": "Home Button", onClick: function () {
                    scrollToPortfolio();
                }, children: "-Back to portfolio" }), _jsxs("div", { className: "project-text-box", children: [_jsx("h1", { className: "cosmic-title", children: "IgniteCS" }), _jsx("p", { className: "cosmic-text", children: "I am a program organizer for IgniteCS, which is a computer science teaching organization for schools in the Providence area. I organize weekly lessons teaching Scratch and HTML at Sophia Academy, a middle school in Providence." }), _jsx("img", { className: "cosmic-image2", src: "/static/images/ignitecs.png" }), _jsx("p", { className: "cosmic-text", children: "I also worked on some frontend for our new website. This was through Full Stack at Brown, a club that creates websites/software for other clubs at Brown. Through this experience, I got to see firsthand the process of a team creating a lo-fi design of a website, to a full sketch on figma, to bringing it to fruition in Typescript and React." }), _jsx("p", { className: "cosmic-text", children: "I integrated the Cosmic API into the website, in order to make it easier for our team to edit website content freely and easily." })] }), _jsxs("div", { className: "ignite-bottom", children: [_jsx("button", { className: "ignite-square-button", "aria-label": "square button", onClick: function () { return window.open("https://ignite-cs.vercel.app/", "_blank"); }, children: _jsxs("div", { className: "image-container", children: [_jsx("img", { className: "square-image", src: "/static/images/square.png", id: "square-image" }), _jsx("div", { className: "text-overlay", children: _jsx("p", { className: "lockin-square-text", id: "square-text", children: "Check out the website here!" }) })] }) }), _jsxs("div", { className: "ignite-team", children: [_jsx("img", { className: "ignite-team-pic", src: "/static/images/ignite-team.jpg" }), _jsx("p", { className: "ignite-team-text", children: "My team at Sophia Academy!" })] })] })] }));
}
