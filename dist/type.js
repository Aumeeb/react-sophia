"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var svgBadge_1 = require("./svgs/svgBadge");
exports.tuple = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
exports.tupleNum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
var SVGType;
(function (SVGType) {
    SVGType[SVGType["Class"] = 0] = "Class";
    SVGType[SVGType["CodeSegment"] = 1] = "CodeSegment";
    SVGType[SVGType["Constant"] = 2] = "Constant";
    SVGType[SVGType["Enum"] = 3] = "Enum";
    SVGType[SVGType["Field"] = 4] = "Field";
    SVGType[SVGType["Function"] = 5] = "Function";
    SVGType[SVGType["Interface"] = 6] = "Interface";
    SVGType[SVGType["Keyword"] = 7] = "Keyword";
    SVGType[SVGType["Namespace"] = 8] = "Namespace";
    SVGType[SVGType["Event"] = 9] = "Event";
})(SVGType = exports.SVGType || (exports.SVGType = {}));
function getType(value) {
    if (util_1.isBoolean(value))
        return 'boolean';
    if (util_1.isString(value))
        return 'string';
    if (util_1.isNumber(value))
        return 'number';
    if (svgBadge_1.isEvent(value))
        return 'event';
    if (util_1.isFunction(value))
        return 'function';
    if (util_1.isUndefined(value))
        return 'undefined';
    if (util_1.isArray(value))
        return 'array';
    if (util_1.isNull(value))
        return 'null';
    if (util_1.isObject(value))
        return 'object';
    if (util_1.isSymbol(value))
        return "symbol";
    return 'undefined';
}
exports.getType = getType;
