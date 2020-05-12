"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var svgBadge_1 = require("../../svgs/svgBadge");
var react_2 = __importDefault(require("react"));
var type_decorator_1 = require("./type-decorator");
var emojis_1 = require("../../shared/emojis");
var type_1 = require("../../type");
var styles_1 = require("../../shared/styles");
var random_1 = require("../../util/random");
var string_format_1 = require("../../util/string-format");
var func_analysis_1 = require("../../util/func-analysis");
var useUpdate_1 = require("../../hooks/useUpdate");
var useObject_1 = require("../../hooks/useObject");
var keyboard_1 = require("../../shared/keyboard");
exports.TYPE_COLORS = {
    function: 'rgb(220,220,170)',
    string: '#dd7324',
    number: '#b4c8a0',
    event: 'rgb(235,184,109)',
    boolean: '#569cca',
    null_undefined: '#569cca',
    object: '#000',
    array: '#b4c8a0',
    symbol: '#ff7990',
};
var DrawNativeTypeRow = /** @class */ (function () {
    function DrawNativeTypeRow(value, fieldName, hierarchy, standby) {
        this.value = value;
        this.fieldName = fieldName;
        this.hierarchy = hierarchy;
        this.standby = standby;
        this.size = {
            //set svg icon size
            width: 20,
            height: 20,
        };
        this.textTextColor = '';
    }
    DrawNativeTypeRow.prototype.getNativeTypeDescription = function () {
        var _a, _b;
        if (type_1.getType(this.value) === 'string')
            return new StringType(this.value, this.fieldName, this.hierarchy, (this.standby = { nextHierarchyFieldName: (_a = this.standby) === null || _a === void 0 ? void 0 : _a.nextHierarchyFieldName, curHierarchyType: (_b = this.standby) === null || _b === void 0 ? void 0 : _b.curHierarchyType })).getNativeTypeDescription();
        if (type_1.getType(this.value) === 'number')
            return new NumberType(this.value, this.fieldName, this.hierarchy).getNativeTypeDescription();
        if (type_1.getType(this.value) === 'boolean')
            return new BooleanType(this.value, this.fieldName, this.hierarchy).getNativeTypeDescription();
        if (type_1.getType(this.value) === 'function')
            return new FunctionType(this.value, this.fieldName, this.hierarchy).getNativeTypeDescription();
        if (type_1.getType(this.value) === 'event')
            return new EventType(this.value, this.fieldName, this.hierarchy).getNativeTypeDescription();
        if (type_1.getType(this.value) === 'undefined')
            return new UndefinedType(this.value, this.fieldName, this.hierarchy).getNativeTypeDescription();
        if (type_1.getType(this.value) === 'null')
            return new NullType(this.value, this.fieldName, this.hierarchy).getNativeTypeDescription();
        if (type_1.getType(this.value) === 'object')
            return new ObjectType(this.value, this.fieldName, this.hierarchy).getNativeTypeDescription();
        if (type_1.getType(this.value) === 'symbol')
            return new SymbolType(this.value, this.fieldName, this.hierarchy).getNativeTypeDescription();
        if (type_1.getType(this.value) === 'array')
            return new ArrayType(this.value, this.fieldName, this.hierarchy).getNativeTypeDescription();
        return undefined;
    };
    DrawNativeTypeRow.prototype.getDefualtTypeSVG = function () {
        return svgBadge_1.getSVG(this.value)(this.size);
    };
    DrawNativeTypeRow.prototype.getRegularBody = function (prefix, affix) {
        if (prefix === void 0) { prefix = react_2.default.createElement(react_2.default.Fragment, null); }
        if (affix === void 0) { affix = react_2.default.createElement(react_2.default.Fragment, null); }
        var displayValue = this.value;
        if (type_1.getType(this.value) === 'symbol') {
            displayValue = this.value.toString(); //symbol has method toString intrinsically but 'undefined & null' doesn't
        }
        if (type_1.getType(this.value) === 'function' || type_1.getType(this.value) === 'event') {
            displayValue = string_format_1.shorten(this.value + '', 66);
        }
        return (react_2.default.createElement(type_decorator_1.CSpan, { color: this.textTextColor },
            prefix,
            displayValue + '',
            affix));
    };
    DrawNativeTypeRow.prototype.getStringBody = function (prefix, affix) {
        if (prefix === void 0) { prefix = react_2.default.createElement(react_2.default.Fragment, null); }
        if (affix === void 0) { affix = react_2.default.createElement(react_2.default.Fragment, null); }
        var _a = useObject_1.useObject({ hovered: false, clicked: false, __sv__: this.value }), object = _a.object, updateObject = _a.updateObject, recover = _a.recover;
        var _input = react_1.useRef(null);
        var displayValue = this.value;
        react_1.useEffect(function () {
            var _a;
            if (object.clicked) {
                (_a = _input.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }, [object.clicked]);
        function modifyText(e) {
            recover();
        }
        return (react_2.default.createElement(react_2.default.Fragment, null,
            !object.clicked && (react_2.default.createElement(type_decorator_1.CSpan, { onClick: function () { return updateObject('clicked', true); }, onMouseOver: function () { return updateObject('hovered', true); }, onMouseOut: function () { return updateObject('hovered', false); }, color: this.textTextColor, style: object.hovered ? styles_1.StringTypeStyle.hovered : styles_1.StringTypeStyle.normal },
                prefix,
                displayValue + '',
                affix)),
            object.clicked && (react_2.default.createElement("input", { ref: _input, value: object.__sv__, onBlur: modifyText, onChange: function (e) { return updateObject('__sv__', e.target.value); }, onKeyDown: function (e) {
                    if (e.keyCode === keyboard_1.KeyBoard.Enter)
                        recover();
                } }))));
    };
    DrawNativeTypeRow.prototype.getShrunkenObjectBody = function () {
        return react_2.default.createElement(type_decorator_1.CSpan, { color: exports.TYPE_COLORS.object }, "{...}");
    };
    DrawNativeTypeRow.prototype.getShrunkenArrayBody = function (arr) {
        return react_2.default.createElement(type_decorator_1.CSpan, { color: exports.TYPE_COLORS.array }, "Array (" + arr.length + ")");
    };
    DrawNativeTypeRow.prototype.getFunctionBody = function () {
        var func = this.value;
        var _a = useUpdate_1.useUpdate(), update = _a.update, setUpdate = _a.setUpdate;
        return (react_2.default.createElement("article", { style: __assign({}, styles_1.INLINE_BLOCK) },
            react_2.default.createElement("div", null,
                react_2.default.createElement("span", { onClick: setUpdate }, emojis_1.EMJS.run),
                ' ',
                react_2.default.createElement(type_decorator_1.CSpan, { ml: 0, color: 'gray' }, string_format_1.shorten(this.value + '', 66))),
            react_2.default.createElement(type_decorator_1.RenderFuncInParameters, { value: func, shouldExecute: update })));
    };
    /** for array */
    DrawNativeTypeRow.prototype.getArrayBody = function (deepLevel) {
        var _this = this;
        if (deepLevel === void 0) { deepLevel = 0; }
        var arrValue = this.value;
        var _a = __read(react_1.useState(false), 2), expend = _a[0], setExpend = _a[1];
        return (react_2.default.createElement("article", { style: __assign({}, styles_1.INLINE_BLOCK) },
            react_2.default.createElement("span", { onClick: function (e) {
                    e.stopPropagation();
                    setExpend(!expend);
                } }, expend ? emojis_1.EMJS.expend : emojis_1.SYMBOLS.rightPointingTriangle),
            react_2.default.createElement("span", { style: styles_1.ITALIC },
                " (",
                arrValue.length,
                ")"),
            react_2.default.createElement(type_decorator_1.CSpan, { ml: 10 }, "["),
            arrValue.map(function (val, i) {
                var _a;
                var matchedBody;
                if (type_1.getType(val) === 'number' || type_1.getType(val) === 'string' || type_1.getType(val) === 'null' || type_1.getType(val) === 'boolean' || type_1.getType(val) === 'undefined' || type_1.getType(val) === 'symbol') {
                    matchedBody = (_a = new DrawNativeTypeRow(val, _this.fieldName, _this.hierarchy).getNativeTypeDescription()) === null || _a === void 0 ? void 0 : _a.mainBody;
                }
                if (type_1.getType(val) === 'function') {
                    var funcValue = 'func';
                    if (func_analysis_1.isArrowFunction(val)) {
                        funcValue = 'λ-func';
                    }
                    matchedBody = react_2.default.createElement(type_decorator_1.CSpan, { color: exports.TYPE_COLORS.function }, funcValue);
                }
                if (type_1.getType(val) === 'object') {
                    matchedBody = _this.getShrunkenObjectBody();
                }
                if (type_1.getType(val) === 'array') {
                    matchedBody = _this.getShrunkenArrayBody(val);
                }
                return (react_2.default.createElement("span", { key: random_1.getUid() },
                    matchedBody,
                    i < arrValue.length - 1 ? _this.getSeparatorNode(', ') : ''));
            }),
            react_2.default.createElement(type_decorator_1.CSpan, null, "]"),
            expend && (react_2.default.createElement("div", null, arrValue.map(function (p, index) {
                return (react_2.default.createElement("div", { key: random_1.getUid() },
                    react_2.default.createElement(type_decorator_1.RenderPropertyOfObjectOrArray, { objectKey: index.toString(), value: p, objHierarchy: _this.hierarchy })));
            })))));
    };
    DrawNativeTypeRow.prototype.getObjectBody = function (obj) {
        var _this = this;
        var _a = __read(react_1.useState(false), 2), expend = _a[0], setExpend = _a[1];
        var objKeys = Object.keys(obj);
        return (react_2.default.createElement("article", { style: __assign({}, styles_1.INLINE_BLOCK) },
            react_2.default.createElement("span", { onClick: function (e) {
                    e.stopPropagation();
                    setExpend(!expend);
                } }, expend ? emojis_1.EMJS.expend : emojis_1.SYMBOLS.rightPointingTriangle),
            react_2.default.createElement("span", { style: styles_1.ITALIC },
                " (",
                objKeys.length,
                ")"),
            react_2.default.createElement(type_decorator_1.CSpan, { ml: 10 }, '{ '),
            objKeys.map(function (fieldName, i) {
                var _a;
                var val = obj[fieldName];
                var matchedBody;
                if (type_1.getType(val) === 'number' || type_1.getType(val) === 'string' || type_1.getType(val) === 'null' || type_1.getType(val) === 'boolean' || type_1.getType(val) === 'undefined' || type_1.getType(val) === 'symbol') {
                    matchedBody = (_a = new DrawNativeTypeRow(val, _this.fieldName, _this.hierarchy, { nextHierarchyFieldName: fieldName, curHierarchyType: 'object' }).getNativeTypeDescription()) === null || _a === void 0 ? void 0 : _a.mainBody;
                }
                if (type_1.getType(val) === 'function') {
                    var funcValue = 'func';
                    if (func_analysis_1.isArrowFunction(val)) {
                        funcValue = 'λ-func';
                    }
                    matchedBody = react_2.default.createElement(type_decorator_1.CSpan, { color: exports.TYPE_COLORS.function }, funcValue);
                }
                if (type_1.getType(val) === 'object') {
                    matchedBody = _this.getShrunkenObjectBody();
                }
                if (type_1.getType(val) === 'array') {
                    matchedBody = _this.getShrunkenArrayBody(val);
                }
                return (react_2.default.createElement("span", { key: random_1.getUid() }, fieldName + " :",
                    " ",
                    matchedBody,
                    i < objKeys.length - 1 ? _this.getSeparatorNode(', ') : ''));
            }),
            react_2.default.createElement(type_decorator_1.CSpan, null, '}'),
            expend && (react_2.default.createElement("div", null, objKeys.map(function (k, i) {
                return (react_2.default.createElement("div", { key: random_1.getUid() },
                    react_2.default.createElement(type_decorator_1.RenderPropertyOfObjectOrArray, { objectKey: k, value: obj[k], objHierarchy: _this.hierarchy })));
            })))));
    };
    DrawNativeTypeRow.prototype.getSeparatorNode = function (separator) {
        if (separator === void 0) { separator = react_2.default.createElement(react_2.default.Fragment, null); }
        return (react_2.default.createElement(type_decorator_1.CSpan, { ml: 0, color: 'gray' }, separator));
    };
    return DrawNativeTypeRow;
}());
exports.DrawNativeTypeRow = DrawNativeTypeRow;
var StringType = /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.string;
        return _this;
    }
    class_1.prototype.getNativeTypeDescription = function () {
        var _a, _b, _c, _d;
        return {
            typeRange: ['string'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: (react_2.default.createElement(type_decorator_1.RenderEditableString, { prefix: "", affix: "", value: this.value, fieldName: this.fieldName, hierarchy: this.hierarchy, fromType: (_b = (_a = this.standby) === null || _a === void 0 ? void 0 : _a.curHierarchyType) !== null && _b !== void 0 ? _b : 'object', nextHierarchy: (_d = (_c = this.standby) === null || _c === void 0 ? void 0 : _c.nextHierarchyFieldName) !== null && _d !== void 0 ? _d : null })),
            self: this,
            beforeNode: react_2.default.createElement(react_2.default.Fragment, null),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_1;
}(DrawNativeTypeRow));
var NumberType = /** @class */ (function (_super) {
    __extends(class_2, _super);
    function class_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.number;
        return _this;
    }
    class_2.prototype.getNativeTypeDescription = function () {
        return {
            typeRange: ['number'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getRegularBody(),
            self: this,
            beforeNode: react_2.default.createElement(react_2.default.Fragment, null),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_2;
}(DrawNativeTypeRow));
var EventType = /** @class */ (function (_super) {
    __extends(class_3, _super);
    function class_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.event;
        return _this;
    }
    class_3.prototype.getNativeTypeDescription = function () {
        return {
            typeRange: ['event'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getRegularBody(),
            self: this,
            beforeNode: react_2.default.createElement("span", { onClick: this.value }, emojis_1.EMJS.run),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_3;
}(DrawNativeTypeRow));
var FunctionType = /** @class */ (function (_super) {
    __extends(class_4, _super);
    function class_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.function;
        return _this;
    }
    class_4.prototype.getNativeTypeDescription = function () {
        return {
            typeRange: ['function'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getFunctionBody(),
            self: this,
            beforeNode: react_2.default.createElement(react_2.default.Fragment, null),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_4;
}(DrawNativeTypeRow));
var BooleanType = /** @class */ (function (_super) {
    __extends(class_5, _super);
    function class_5() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.boolean;
        return _this;
    }
    class_5.prototype.getNativeTypeDescription = function () {
        return {
            typeRange: ['boolean'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getRegularBody(),
            self: this,
            beforeNode: react_2.default.createElement(react_2.default.Fragment, null),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_5;
}(DrawNativeTypeRow));
var UndefinedType = /** @class */ (function (_super) {
    __extends(class_6, _super);
    function class_6() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.null_undefined;
        return _this;
    }
    class_6.prototype.getNativeTypeDescription = function () {
        return {
            typeRange: ['undefined'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getRegularBody(),
            self: this,
            beforeNode: react_2.default.createElement(react_2.default.Fragment, null),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_6;
}(DrawNativeTypeRow));
var NullType = /** @class */ (function (_super) {
    __extends(class_7, _super);
    function class_7() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.null_undefined;
        return _this;
    }
    class_7.prototype.getNativeTypeDescription = function () {
        return {
            typeRange: ['null'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getRegularBody(),
            self: this,
            beforeNode: react_2.default.createElement(react_2.default.Fragment, null),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_7;
}(DrawNativeTypeRow));
var ObjectType = /** @class */ (function (_super) {
    __extends(class_8, _super);
    function class_8() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.object;
        return _this;
    }
    class_8.prototype.getNativeTypeDescription = function () {
        return {
            typeRange: ['object'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getObjectBody(this.value),
            self: this,
            beforeNode: react_2.default.createElement(react_2.default.Fragment, null),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_8;
}(DrawNativeTypeRow));
var SymbolType = /** @class */ (function (_super) {
    __extends(class_9, _super);
    function class_9() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.symbol;
        return _this;
    }
    class_9.prototype.getNativeTypeDescription = function () {
        return {
            typeRange: ['object'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getRegularBody(),
            self: this,
            beforeNode: react_2.default.createElement(react_2.default.Fragment, null),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_9;
}(DrawNativeTypeRow));
var ArrayType = /** @class */ (function (_super) {
    __extends(class_10, _super);
    function class_10() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textTextColor = exports.TYPE_COLORS.array;
        return _this;
    }
    class_10.prototype.getNativeTypeDescription = function () {
        return {
            typeRange: ['number'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getArrayBody(),
            self: this,
            beforeNode: react_2.default.createElement(react_2.default.Fragment, null),
            afterNode: react_2.default.createElement(react_2.default.Fragment, null),
        };
    };
    return class_10;
}(DrawNativeTypeRow));
