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
import Portfolio from "./portfolio";
var Section;
(function (Section) {
    Section["HOME"] = "HOME";
    Section["ABOUTME"] = "ABOUTME";
    Section["COSMIC"] = "COSMIC";
    Section["LOCKIN"] = "LOCKIN";
    Section["IGNITE"] = "IGNITE";
})(Section || (Section = {}));
export default function Home(props) {
    // const imagePath1 = "/src/assets/images/square.png";
    // const imagePath2 = "/src/assets/images/face-reveal.png";
    var imagePath1 = "/static/images/square.png";
    var imagePath2 = "/static/images/face-reveal.png";
    var currentImagePath = imagePath1;
    function changeImage() {
        var image = document.getElementById("square-image");
        var imagetext = document.getElementById("square-text");
        if (currentImagePath === imagePath1) {
            image.src = imagePath2;
            currentImagePath = imagePath2;
            imagetext.textContent = "";
        }
        else {
            image.src = imagePath1;
            currentImagePath = imagePath1;
            imagetext.textContent = "face reveal";
        }
    }
    function scrollToPortfolio() {
        var targetDiv = document.getElementById("lighter-purple-bg");
        if (targetDiv != null) {
            targetDiv.scrollIntoView({ behavior: "auto" });
        }
        else {
            console.error("Could not find target div");
        }
    }
    function scrollToTop() {
        return __awaiter(this, void 0, void 0, function () {
            var targetDiv, targetOffset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, props.setSection(Section.ABOUTME)];
                    case 1:
                        _a.sent();
                        targetDiv = document.getElementById("back-home-button");
                        if (targetDiv != null) {
                            targetOffset = targetDiv.offsetTop - 50;
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
    return (_jsxs("div", { className: "purple-bg", children: [_jsxs("h1", { "aria-label": "Introduction Text", className: "hello-text", id: "hello-text", children: ["Hi! I\u2019m ", _jsx("span", { className: "bold-sans", children: "Jinho" }), "! I\u2019m a full-stack developer studying computer science and literary arts at Brown University. I'm interested in the intersections of CS and language, as well as creating accessible computer science education."] }), _jsxs("div", { className: "buttons", children: [_jsx("button", { className: "square-button", "aria-label": "square button", onClick: function () { return changeImage(); }, children: _jsxs("div", { className: "image-container", children: [_jsx("img", { className: "square-image", src: "/static/images/square.png", id: "square-image" }), _jsx("div", { className: "text-overlay", children: _jsx("p", { className: "square-text", id: "square-text", children: "face reveal" }) })] }) }), _jsx("button", { className: "diamond-button", "aria-label": "diamond button", onClick: function () {
                            scrollToTop();
                        }, children: _jsxs("div", { className: "image-container", children: [_jsx("img", { className: "diamond-image", src: "/static/images/diamond.png", id: "diamond-image" }), _jsx("div", { className: "text-overlay", children: _jsx("p", { className: "diamond-text", id: "diamond-text", children: "about me" }) })] }) }), _jsx("button", { className: "square-portfolio-button", "aria-label": "square button", onClick: function () { return scrollToPortfolio(); }, children: _jsxs("div", { className: "image-container", children: [_jsx("img", { className: "square-image", src: "/static/images/square.png", id: "square-image" }), _jsx("div", { className: "text-overlay", children: _jsx("p", { className: "square-text", id: "square-text", children: "portfolio" }) })] }) }), _jsxs("div", { className: "rectangle-stack", children: [_jsx("button", { className: "rectangle-button", "aria-label": "rectangle button", onClick: function () {
                                    return window.open("https://docs.google.com/document/d/16JF5fy8F_anR5J0NW3DCHFrc5VUXDOtn/edit?usp=sharing&ouid=104602903123943446095&rtpof=true&sd=true", "_blank");
                                }, children: _jsxs("div", { className: "image-container", children: [_jsx("img", { className: "rectangle-image", src: "/static/images/rectangle.png", id: "rectangle-image" }), _jsx("div", { className: "text-overlay", children: _jsx("p", { className: "square-text", id: "square-text", children: "resume" }) })] }) }), _jsx("button", { className: "rectangle-button", "aria-label": "rectangle button", onClick: function () {
                                    return window.open("https://www.linkedin.com/in/jinho-lee-23a30b217/", "_blank");
                                }, children: _jsxs("div", { className: "image-container", children: [_jsx("img", { className: "rectangle-image", src: "/static/images/rectangle.png", id: "rectangle-image" }), _jsx("div", { className: "text-overlay", children: _jsx("p", { className: "square-text", id: "square-text", children: "linkedin" }) })] }) }), _jsx("button", { className: "rectangle-button", "aria-label": "rectangle button", onClick: function () { return window.open("mailto:jinho_lee@brown.edu", "_blank"); }, children: _jsxs("div", { className: "image-container", children: [_jsx("img", { className: "rectangle-image", src: "/static/images/rectangle.png", id: "rectangle-image" }), _jsx("div", { className: "text-overlay", children: _jsx("p", { className: "square-text", id: "square-text", children: "email" }) })] }) })] })] }), _jsx(Portfolio, { setSection: props.setSection })] }));
}
