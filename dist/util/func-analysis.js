"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isArrowFunction(fn) {
    var isNonArrowFnRegex = /^\s*function/;
    var isArrowFnWithParensRegex = /^\([^)]*\) *=>/;
    var isArrowFnWithoutParensRegex = /^[^=]*=>/;
    var fnStr = Function.prototype.toString.call(fn);
    return fnStr.length > 0 &&
        !isNonArrowFnRegex.test(fnStr) &&
        (isArrowFnWithParensRegex.test(fnStr) || isArrowFnWithoutParensRegex.test(fnStr));
}
exports.isArrowFunction = isArrowFunction;
;
function analyzeFuncParams(fn) {
    if (typeof fn === "function") {
        var funcString = fn.toString();
        if (isArrowFunction(fn) && !funcString.includes(String.fromCharCode(0x28))) {
            return [funcString.split('=>')[0].trim()];
        }
        var parenthesisL = funcString.indexOf(String.fromCharCode(0x28));
        var parenthesisR = funcString.indexOf(String.fromCharCode(0x29));
        var paramsSeries = funcString.substr(parenthesisL + 1, parenthesisR - parenthesisL - 1);
        if (paramsSeries === "")
            return [];
        return paramsSeries.split(',');
    }
    return [];
}
exports.analyzeFuncParams = analyzeFuncParams;
function recall() {
}
exports.recall = recall;
