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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var native_type_factory_1 = require("./native-type-factory");
var styles_1 = require("../../shared/styles");
var func_analysis_1 = require("../../util/func-analysis");
var svgBadge_1 = require("../../svgs/svgBadge");
var useObject_1 = require("../../hooks/useObject");
var array_ex_1 = require("../../util/array-ex");
var keyboard_1 = require("../../shared/keyboard");
var objectStore_1 = require("../../archive/objectStore");
var nested_property_1 = __importDefault(require("../../util/nested-property"));
var KEY_STYLE = {
    marginLeft: 2,
    marginRight: 2,
    position: 'relative',
    top: -5,
};
var DATA_TYPE_WRAPPER_STYLE = { position: 'relative', top: 0, lineHeight: '20px' };
exports.ColorfulRows = function (props) { return react_1.default.createElement(exports.RenderPropertyOfObjectOrArray, { objectKey: props.objectKey, value: props.value, objHierarchy: '' }); };
exports.CSpan = function (props) {
    var _a = props.ml, ml = _a === void 0 ? 6 : _a;
    return (react_1.default.createElement("span", __assign({}, props, { style: __assign({ marginLeft: ml, color: props.color }, props.style) }), props.children));
};
/**This function will be rendered the each property of an object or an item of an Array */
exports.RenderPropertyOfObjectOrArray = function (props) {
    var abyss = ',' + props.objectKey.toString() + props.objHierarchy.toString();
    var typeDesc = new native_type_factory_1.DrawNativeTypeRow(props.value, props.objectKey, abyss).getNativeTypeDescription();
    return (react_1.default.createElement("div", { style: __assign({ marginTop: 10 }, styles_1.FLEX) },
        react_1.default.createElement("aside", null, typeDesc === null || typeDesc === void 0 ? void 0 :
            typeDesc.self.getDefualtTypeSVG(),
            " ",
            react_1.default.createElement("span", { style: KEY_STYLE },
                props.objectKey,
                " :")),
        react_1.default.createElement("article", { style: DATA_TYPE_WRAPPER_STYLE }, typeDesc === null || typeDesc === void 0 ? void 0 :
            typeDesc.beforeNode,
            " ", typeDesc === null || typeDesc === void 0 ? void 0 :
            typeDesc.mainBody,
            " ", typeDesc === null || typeDesc === void 0 ? void 0 :
            typeDesc.afterNode)));
};
exports.RenderFuncInParameters = function (props) {
    var funcArguments = func_analysis_1.analyzeFuncParams(props.value);
    var _a = useObject_1.useObject({ isFirst: true, argument: array_ex_1.getEmptyArray(funcArguments.length) }), object = _a.object, updateObject = _a.updateObject;
    react_1.useEffect(function () {
        if (object.isFirst)
            updateObject('isFirst', false);
        else
            Reflect.apply(props.value, undefined, object.argument);
    }, [props.shouldExecute]);
    return (react_1.default.createElement("div", null, funcArguments.map(function (arg, i) {
        return (react_1.default.createElement("div", { key: i, style: { marginTop: 10 } },
            svgBadge_1.getExtraSVG('wrench')({ width: 16 }),
            " ",
            arg,
            " :",
            ' ',
            react_1.default.createElement("input", { value: object.argument[i], type: "text", onChange: function (e) {
                    object.argument[i] = e.target.value;
                    updateObject('argument', object.argument);
                } })));
    })));
};
/** This function give you a ablitiy to edit string value which came from the  `datasource` perhaps it took much time to calculation */
exports.RenderEditableString = function (props) {
    var _a = useObject_1.useObject({ hovered: false, clicked: false, __sv__: props.value }), object = _a.object, updateObject = _a.updateObject, recover = _a.recover;
    var _input = react_1.useRef(null);
    react_1.useEffect(function () {
        var _a;
        if (object.clicked) {
            (_a = _input.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [object.clicked]);
    function modifyText(e) {
        recover(['__sv__']);
        update();
    }
    function update() {
        var objPath = props.hierarchy.substring(1).split(',').reverse().join('.');
        if (props.fromType === 'object') {
            if (props.nextHierarchy !== null) {
                objPath += "." + props.nextHierarchy;
            }
        }
        else if (props.fromType === 'array') {
        }
        else {
        }
        var copiedO = objectStore_1.os.currentScene.object;
        nested_property_1.default.set(copiedO, objPath, object.__sv__);
        objectStore_1.os.currentScene.set(copiedO);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !object.clicked && (react_1.default.createElement(exports.CSpan, { onClick: function () { return updateObject('clicked', true); }, onMouseOver: function () { return updateObject('hovered', true); }, onMouseOut: function () { return updateObject('hovered', false); }, color: native_type_factory_1.TYPE_COLORS.string, style: object.hovered ? styles_1.StringTypeStyle.hovered : styles_1.StringTypeStyle.normal },
            props.prefix,
            object.__sv__ + '',
            props.affix)),
        object.clicked && (react_1.default.createElement("input", { ref: _input, value: object.__sv__, onBlur: modifyText, onChange: function (e) { return updateObject('__sv__', e.target.value); }, onKeyDown: function (e) {
                if (e.keyCode === keyboard_1.KeyBoard.Enter) {
                    recover(['__sv__']);
                    update();
                }
            } }))));
};
