"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shorten(s, len, affix) {
    if (len === void 0) { len = 40; }
    if (affix === void 0) { affix = "..."; }
    if (s.length < len)
        return s.substr(0, len);
    else
        return s.substr(0, len) + affix;
}
exports.shorten = shorten;
function reverseString(str) {
    return str.split("").reverse().join("");
}
exports.reverseString = reverseString;
