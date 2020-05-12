"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var SVG = __importStar(require("."));
exports.path = '../assets/';
var SVGType;
(function (SVGType) {
    SVGType["Class"] = "class.svg";
    SVGType["CodeSegment"] = "codesegments.svg";
    SVGType["Constant"] = "const.svg";
    SVGType["Enum"] = "enum.svg";
    SVGType["Field"] = "field.svg";
    SVGType["Function"] = "function.svg";
    SVGType["Interface"] = "interface.svg";
    SVGType["Keyword"] = "keyword.svg";
    SVGType["Namespace"] = "namespace.svg";
    SVGType["Event"] = "event.svg";
})(SVGType = exports.SVGType || (exports.SVGType = {}));
/** SVG  width&height px*/
var side = '32';
function isConst(str) {
    if (/^[A-Z]+$/.test(str) || /^[A-Z]+/.test(str)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isConst = isConst;
function isEvent(str) {
    try {
        if (typeof str === 'function') {
            return str.name.substr(0, 2) == 'on' ? true : false;
        }
        return str.substr(0, 2) == 'on' ? true : false;
    }
    catch (error) {
        return false;
    }
}
exports.isEvent = isEvent;
function getSVG(value) {
    if (util_1.isString(value) || util_1.isNumber(value)) {
        return SVG.Field;
    }
    if (util_1.isFunction(value) && isEvent(value)) {
        return SVG.Event;
    }
    if (util_1.isFunction(value)) {
        return SVG.Function;
    }
    if (util_1.isObject(value)) {
        if (util_1.isArray(value))
            return SVG.Array;
        return SVG.Object;
    }
    return SVG.Field;
}
exports.getSVG = getSVG;
function getExtraSVG(value) {
    if (value === 'wrench')
        return SVG.Wrench;
    return SVG.Default;
}
exports.getExtraSVG = getExtraSVG;
