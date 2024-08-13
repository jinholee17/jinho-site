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
var Section;
(function (Section) {
    Section["HOME"] = "HOME";
    Section["ABOUTME"] = "ABOUTME";
    Section["COSMIC"] = "COSMIC";
    Section["LOCKIN"] = "LOCKIN";
    Section["IGNITE"] = "IGNITE";
})(Section || (Section = {}));
function AboutMe(props) {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "aboutme-page" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "aboutme-page-top" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: "back-home-button", id: "back-home-button", "aria-label": "Home Button", onClick: function () { return props.setSection(Section.HOME); } }, { children: "-Back to home" })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "aboutme-text" }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: "aboutme-title" }, { children: "About me" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "aboutme-paragraph" }, { children: "Hi! I was born in South Korea, but moved to Cambridge, MA when I was 6 months old. I grew up in the Port neighborhood, and currently reside in Providence." })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "aboutme-paragraph" }, { children: "I\u2019m a rising junior at Brown University where I am immersed in computer science, literary arts, theatre, and community organizing. I enjoy running, making lattes, reading poetry, and playing connections!" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "aboutme-paragraph" }, { children: "I made this website using Typescript and React, and deployed using Vercel. Ask me about my favorite restaurants in Cambridge or Taylor Swift\u2019s discography!" })), (0, jsx_runtime_1.jsx)("iframe", { src: "https://open.spotify.com/embed/playlist/6tS9viY0xw6ccuppOcB2bX?utm_source=generator", width: "60%", height: "175", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading: "lazy" })] }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "aboutme-pics" }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "gates-image", src: "/static/images/gates.jpg" }), (0, jsx_runtime_1.jsx)("img", { className: "colorado-image", src: "/static/images/colorado-fun.jpg" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "aboutme-pics" }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "colorado-smiling-image", src: "/static/images/face-reveal-colorado.jpg" }), (0, jsx_runtime_1.jsx)("img", { className: "andy-image", src: "/static/images/andyhouse.jpg" }), (0, jsx_runtime_1.jsx)("img", { className: "sunflower-image", src: "/static/images/sunflowers.jpg" })] }))] })));
}
exports.default = AboutMe;
