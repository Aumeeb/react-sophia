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
require("./index.css");
var objectStore_1 = require("../../archive/objectStore");
var useObject_1 = require("../../hooks/useObject");
var type_decorator_1 = require("../prop-inspect/type-decorator");
var random_1 = require("../../util/random");
var useUpdate_1 = require("../../hooks/useUpdate");
exports.LIMITED_SCENES_TAG = {
    sceneName: '⚙️menu⚙️',
    tag: '5a947008-9044-11ea-bb37-0242ac130002',
};
var tabIndex = 0;
var _Menu = function (props) {
    var _a, _b;
    var fontSize = 12;
    var eachIconWidth = 50;
    objectStore_1.os.config.isSupervise = (_a = props.supervise) !== null && _a !== void 0 ? _a : false;
    var _c = useUpdate_1.useUpdate(), update = _c.update, setUpdate = _c.setUpdate;
    var _d = useObject_1.useObject({
        nav: '📜',
        source: (_b = objectStore_1.os.currentScene.object) !== null && _b !== void 0 ? _b : {},
        tabs: objectStore_1.os.scenes.map(function (tabName) { return ({ tabName: tabName, select: false }); }),
    }), object = _d.object, updateObject = _d.updateObject;
    react_1.useEffect(function () {
        //to save itself to database.
        objectStore_1.os.addMenuAction({ action: { o: object, setO: updateObject }, sence: exports.LIMITED_SCENES_TAG });
    }, []);
    react_1.useEffect(function () {
        console.log(object);
    }, [update]);
    react_1.useEffect(function () {
        try {
            var tabs = objectStore_1.os.scenes.map(function (tabName) { return ({ tabName: tabName, select: false }); });
            if (tabs.length === 0) {
            }
            else {
                tabs[tabIndex].select = false;
                updateObject({ tabs: tabs });
            }
        }
        catch (error) {
            console.log(error);
        }
    }, [object.tabs.length]);
    //default value assignment
    var _e = props.emojiIcon, emojiIcon = _e === void 0 ? '📓 ' : _e, _f = props.scale, scale = _f === void 0 ? 2 : _f, _g = props.throb, throb = _g === void 0 ? true : _g, minWidth = props.minWidth, maxWidth = props.maxWidth;
    return (props === null || props === void 0 ? void 0 : props.supervise) === true ? (react_1.default.createElement("div", { className: throb ? 'menu-icon-beat-up' : '', style: {
            fontSize: scale * fontSize,
        } },
        react_1.default.createElement("header", null,
            react_1.default.createElement("div", { className: "menu-panel-wrapper", style: { width: eachIconWidth } },
                react_1.default.createElement("span", null, emojiIcon),
                props.menuName.map(function (item, index) { return (react_1.default.createElement("span", { key: random_1.getUid(), className: "menu-panel-item-span ", onClick: function () { return updateObject('nav', item.nav); } }, item.nav.toString())); }))),
        renderContentByClickedMenu())) : (react_1.default.createElement(react_1.default.Fragment, null));
    function renderState() {
        var _a;
        return (react_1.default.createElement("div", null, Object.keys((_a = object.source) !== null && _a !== void 0 ? _a : {}).map(function (key) {
            var value = object.source[key];
            return react_1.default.createElement(type_decorator_1.ColorfulRows, { objectKey: key, key: random_1.getUid(), value: value });
        })));
    }
    function renderContentByClickedMenu() {
        if (object.nav === '🗑️')
            return;
        if (object.nav === '📜') {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "menu-panel-info" },
                    react_1.default.createElement("nav", { style: { minWidth: minWidth, maxWidth: maxWidth } }, object.tabs.map(function (curState, i) { return (react_1.default.createElement("span", { key: random_1.getUid(), className: "nav-span " + (curState.select ? 'selected-callee' : ''), onClick: function () {
                            objectStore_1.os.syncScene(curState.tabName);
                            object.tabs.forEach(function (p) { return (p.select = false); });
                            object.tabs[i].select = true;
                            console.log('~~~', objectStore_1.os.currentScene, object.tabs);
                            tabIndex = i; // which index of tab has been clicked
                            updateObject({ source: objectStore_1.os.currentScene.object, tabs: object.tabs });
                        } },
                        curState.tabName,
                        react_1.default.createElement("br", null))); }))),
                react_1.default.createElement("div", { style: { marginTop: -1 }, className: "menu-panel-info anim-ease-width-height" }, renderState())));
        }
    }
};
exports.Menu = function (props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(_Menu, __assign({}, props))));
};
