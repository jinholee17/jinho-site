import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Section;
(function (Section) {
    Section["HOME"] = "HOME";
    Section["ABOUTME"] = "ABOUTME";
    Section["COSMIC"] = "COSMIC";
    Section["LOCKIN"] = "LOCKIN";
    Section["IGNITE"] = "IGNITE";
})(Section || (Section = {}));
export default function AboutMe(props) {
    return (_jsxs("div", { className: "aboutme-page", children: [_jsxs("div", { className: "aboutme-page-top", children: [_jsx("button", { className: "back-home-button", id: "back-home-button", "aria-label": "Home Button", onClick: function () { return props.setSection(Section.HOME); }, children: "-Back to home" }), _jsxs("div", { className: "aboutme-text", children: [_jsx("h1", { className: "aboutme-title", children: "About me" }), _jsx("p", { className: "aboutme-paragraph", children: "Hi! I was born in South Korea, but moved to Cambridge, MA when I was 6 months old. I grew up in the Port neighborhood, and currently reside in Providence." }), _jsx("p", { className: "aboutme-paragraph", children: "I\u2019m a rising junior at Brown University where I am immersed in computer science, literary arts, theatre, and community organizing. I enjoy running, making lattes, reading poetry, and playing connections!" }), _jsx("p", { className: "aboutme-paragraph", children: "I made this website using Typescript and React, and deployed using Vercel. Ask me about my favorite restaurants in Cambridge or Taylor Swift\u2019s discography!" }), _jsx("iframe", { src: "https://open.spotify.com/embed/playlist/6tS9viY0xw6ccuppOcB2bX?utm_source=generator", width: "60%", height: "175", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading: "lazy" })] })] }), _jsxs("div", { className: "aboutme-pics", children: [_jsx("img", { className: "gates-image", src: "/static/images/gates.jpg" }), _jsx("img", { className: "colorado-image", src: "/static/images/colorado-fun.jpg" })] }), _jsxs("div", { className: "aboutme-pics", children: [_jsx("img", { className: "colorado-smiling-image", src: "/static/images/face-reveal-colorado.jpg" }), _jsx("img", { className: "andy-image", src: "/static/images/andyhouse.jpg" }), _jsx("img", { className: "sunflower-image", src: "/static/images/sunflowers.jpg" })] })] }));
}
