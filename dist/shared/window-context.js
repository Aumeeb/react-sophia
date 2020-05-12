"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var useObject_1 = require("../hooks/useObject");
var browser_1 = require("../util/browser");
exports.browserWindowContext = react_1.default.createContext({});
exports.BrowserPropsProvider = function (props) {
    var _a = useObject_1.useObject({ browserHeight: 0, browserWidth: 0, windowEv: null }, { sceneName: '🦄d3AmwDw0🦄' }), object = _a.object, updateObject = _a.updateObject;
    function syncBrwoserWindowInfo(_a) {
        var e = _a.e;
        var empty = object;
        empty.browserWidth = browser_1.getWidth();
        empty.browserHeight = browser_1.getHeight();
        if (e) {
            empty.windowEv = e;
        }
        updateObject(empty);
    }
    react_1.useEffect(function () {
        window.addEventListener('resize', function (e) {
            syncBrwoserWindowInfo({});
        });
        window.addEventListener('load', function () {
            syncBrwoserWindowInfo({});
        });
        window.addEventListener('mousemove', function (e) {
            syncBrwoserWindowInfo({ e: e });
        });
    }, []);
    return react_1.default.createElement(exports.browserWindowContext.Provider, { value: object }, props.children);
};
