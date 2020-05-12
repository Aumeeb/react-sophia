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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var useObject_1 = require("../../hooks/useObject");
var browser_1 = require("../../util/browser");
var styles_1 = require("../../shared/styles");
var STYLES = {
    position: 'fixed',
    zIndex: 100,
};
var CapturedUserMouse = {
    pressed: false,
    pressedX: 0,
    pressedY: 0,
    x: 0,
    y: 0,
};
function edgeProtect(target, info) {
    if (info.x <= 0) {
        info.x = 0;
    }
    if (info.y <= 0) {
        info.y = 0;
    }
    if (info.x >= browser_1.getWidth() - browser_1.EvaluateElementArea(target).width) {
        info.x = browser_1.getWidth() - browser_1.EvaluateElementArea(target).width;
    }
    if (info.y >= browser_1.getHeight() - browser_1.EvaluateElementArea(target).height) {
        info.y = browser_1.getHeight() - browser_1.EvaluateElementArea(target).height;
    }
    return info;
}
function syncDragPosition(target, info) {
    if (target !== null) {
        info = edgeProtect(target, info);
        target.style.left = styles_1.toPixel(info.x);
        target.style.top = styles_1.toPixel(info.y);
        return true;
    }
    else {
        return false;
    }
}
var _Draggable = function (props) {
    var _a = useObject_1.useObject({
        callee: 'draggable',
        onMouseUp: function () { },
        alert: function () {
            alert(2);
        },
        obj: { name: 5, age: 6 },
    }), object = _a.object, updateObject = _a.updateObject;
    var draggablArea = react_1.useRef(null);
    var _b = props.position, position = _b === void 0 ? { x: 500, y: 20 } : _b; //set hatch place
    react_1.useEffect(function () {
        // updateObject({                      //init position where you want to dock [ top left right bottom]
        //   x: getWidth() - position.x,
        //   y: getHeight() - position.y,
        // })
        // updateObject({
        //   x: position.x,
        //   y: position.y,
        // })
        CapturedUserMouse.x = position.x;
        CapturedUserMouse.y = position.y;
        syncDragPosition(draggablArea.current, CapturedUserMouse);
    }, []);
    function mouseDown(ev) {
        // updateObject({
        //   pressed: true,
        //   pressedX: ev.clientX,
        //   pressedY: ev.clientY,
        // })
        CapturedUserMouse.pressed = true;
        CapturedUserMouse.pressedX = ev.clientX;
        CapturedUserMouse.pressedY = ev.clientY;
    }
    function mouseMove(ev) {
        // if (object.pressed) {
        //   let changeX = ev.clientX - object.pressedX
        //   let changeY = ev.clientY - object.pressedY
        //   updateObject({
        //     x: object.x + changeX,
        //     y: object.y + changeY,
        //     pressedX: ev.clientX,
        //     pressedY: ev.clientY,
        //   })
        // }
        if (CapturedUserMouse.pressed) {
            var changeX = ev.clientX - CapturedUserMouse.pressedX;
            var changeY = ev.clientY - CapturedUserMouse.pressedY;
            CapturedUserMouse.x += changeX;
            CapturedUserMouse.y += changeY;
            CapturedUserMouse.pressedX = ev.clientX;
            CapturedUserMouse.pressedY = ev.clientY;
            syncDragPosition(draggablArea.current, CapturedUserMouse);
        }
    }
    function considerMouseDidNotPress() {
        // updateObject('pressed', false)
        CapturedUserMouse.pressed = false;
    }
    return (react_1.default.createElement("div", { ref: draggablArea, className: props.className, onMouseDown: mouseDown, onMouseMove: mouseMove, onMouseUp: considerMouseDidNotPress, onMouseEnter: considerMouseDidNotPress, onDoubleClick: function (e) { return void e.preventDefault(); }, style: __assign(__assign({}, STYLES), { width: props.width, height: props.height, 
            // left: object.x,
            // top: object.y,
            userSelect: 'none' }) }, props.children));
};
exports.Draggable = function (props) {
    return react_1.default.createElement(_Draggable, __assign({}, props));
};
// filter: drop-shadow(2px 9px 18px gray);
