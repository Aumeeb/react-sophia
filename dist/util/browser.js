"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getWidth() {
    return Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);
}
exports.getWidth = getWidth;
function getHeight() {
    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
}
exports.getHeight = getHeight;
function EvaluateElementArea(ele) {
    var width, height = 0;
    width = Math.max(ele.scrollWidth, ele.offsetWidth, ele.clientWidth);
    height = Math.max(ele.scrollHeight, ele.offsetHeight, ele.clientHeight);
    return {
        width: width,
        height: height
    };
}
exports.EvaluateElementArea = EvaluateElementArea;
