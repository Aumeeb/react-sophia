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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var objectStore_1 = require("../archive/objectStore");
var menu_1 = require("../components/menu");
/**
 * This function is a multifunction which take 2 arguments that used to reserve ObjectState for you in your page,
 * you can call this function multi times in the same page or other pages.
 * @template T is object type  like `{} , {age:5} , {age:5, cardNames:[100,200,300]}` all were valid.
 * @param initO  The data object typeof `T` which want to reserve data for you
 * @param [option]
 * @returns  { object,updateObject,recover,}
 */
function useObject(initO, option) {
    if (option === void 0) { option = {}; }
    var _a = __read(react_1.useState(initO), 2), object = _a[0], setO = _a[1];
    var _b = option.sceneName, sceneName = _b === void 0 ? '' : _b;
    // if current sceneName does not equal to ''  so it considered a superviser object.
    if (sceneName !== '' && objectStore_1.os.config.isSupervise) {
        var success = objectStore_1.os.collectObject(option.sceneName, { treasure: object, setTreasure: setO });
        if (success) {
            var menuAction = objectStore_1.os.getMenuStateReturnAction();
            console.log(objectStore_1.os.count, menuAction);
            if (menuAction) {
                menuAction.action.setO({ tabs: objectStore_1.os.formatTabNames() });
            }
        }
        if (sceneName !== menu_1.LIMITED_SCENES_TAG.sceneName) {
            var master = objectStore_1.os.getMaster();
            if (master) {
                if (objectStore_1.os.registerState(sceneName)) {
                    var synchronizdTabs = objectStore_1.os.scenes.map(function (tabName) { return ({ tabName: tabName, select: false }); });
                    master.setTreasure({ tabs: synchronizdTabs });
                    console.log(sceneName, synchronizdTabs);
                }
            }
        }
    }
    function updateObject(key, value) {
        var _a;
        try {
            var shallowObject_1 = __assign({}, object); //here is a bug may be updates typescript will be solved this problem
            /**
             *  to implementation function overload here we have 2  scenarios
             *   #1 passed in a {}
             *   # 2 passed  key & value
             */
            if (typeof key === 'object') {
                Object.keys(key).forEach(function (prop) {
                    shallowObject_1[prop] = key[prop];
                });
            }
            else
                shallowObject_1[key] = value;
            /**
             *  scenaName will be changed by current who called function `SetObject`
             *
             */
            if (sceneName === objectStore_1.os.currentScene.sceneName) {
                (_a = objectStore_1.os.getMenuStateReturnAction()) === null || _a === void 0 ? void 0 : _a.action.setO({ source: __assign({}, shallowObject_1) });
            }
            setO(__assign({}, shallowObject_1));
        }
        catch (error) { }
    }
    function recover(omit) {
        if (omit === undefined) {
            setO(__assign({}, initO));
            return;
        }
        if (omit !== undefined && omit.length > 0) {
            var originalObject_1 = __assign({}, initO);
            omit.forEach(function (p) {
                originalObject_1[p] = object[p];
            });
            setO(originalObject_1);
            return;
        }
    }
    return {
        object: object,
        updateObject: updateObject,
        recover: recover,
    };
}
exports.useObject = useObject;
