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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("../components/menu");
var object_data_process_1 = require("./object-data-process");
var ObjectStore = /** @class */ (function (_super) {
    __extends(ObjectStore, _super);
    function ObjectStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._system_menu_useState = null;
        _this._sceneName = '';
        _this._registeredStateName = []; //to record which stateObject has been register .. if registered it should not  be admit func `useObject` to update repeatedly!
        _this.treasures = new Map();
        _this.config = {
            isSupervise: true
        };
        return _this;
        /** let user to select which  data bind mode is prefered
         *  1way
         * 2ways
        */
        // twoWaysbindsCheck(setO: Function): boolean {
        //     let isTwoWays = false
        //     this.treasures.forEach(p => {
        //         if (p.setTreasure === setO && p.twoWay) {
        //             isTwoWays = true
        //         }
        //     })
        //     return isTwoWays
        // }
    }
    Object.defineProperty(ObjectStore.prototype, "currentScene", {
        get: function () {
            var _this = this;
            var _a, _b;
            return {
                sceneName: this._sceneName,
                object: (_b = (_a = this.get(this._sceneName)) === null || _a === void 0 ? void 0 : _a.treasure) !== null && _b !== void 0 ? _b : {},
                set: function (value) {
                    var _a, _b;
                    var setValue = (_b = (_a = _this.get(_this._sceneName)) === null || _a === void 0 ? void 0 : _a.setTreasure) !== null && _b !== void 0 ? _b : (function () { return Promise.resolve(void 0); });
                    setValue(__assign({}, value));
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    ObjectStore.prototype.getMenuStateReturnAction = function () {
        return this._system_menu_useState;
    };
    ObjectStore.prototype.addMenuAction = function (act) {
        this._system_menu_useState = act;
    };
    ObjectStore.prototype.formatTabNames = function () {
        var names = this.scenes.map(function (tabName) { return ({ tabName: tabName, select: false }); });
        console.log("aa:", names);
        return names;
    };
    Object.defineProperty(ObjectStore.prototype, "count", {
        /**To get count of the state objects. */
        get: function () {
            return this.treasures.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectStore.prototype, "scenes", {
        /**Get the alias names of all state objects*/
        get: function () {
            var e_1, _a;
            var sceneNameList = [];
            try {
                for (var _b = __values(this.treasures.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    sceneNameList.push(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return sceneNameList;
        },
        enumerable: true,
        configurable: true
    });
    /** Automatically store the state object to the storage */
    ObjectStore.prototype.collectObject = function (key, value) {
        try {
            var preCount = this.treasures.size;
            this.treasures.set(key, value);
            var nowCount = this.treasures.size;
            if (nowCount > preCount) {
                console.log(key, " was collected by 👾");
                _super.prototype.onSave.call(this);
                return true;
            }
        }
        catch (error) {
            _super.prototype.onSaveFailure.call(this, error);
            return false;
        }
        return false;
    };
    ObjectStore.prototype.registerState = function (name) {
        if (!this._registeredStateName.includes(name)) {
            this._registeredStateName.push(name);
            return true;
        }
        return false;
    };
    /** To getStateObject  */
    ObjectStore.prototype.get = function (key) {
        return this.treasures.get(key);
    };
    ObjectStore.prototype.getMaster = function () {
        return this.get(menu_1.LIMITED_SCENES_TAG.sceneName);
    };
    /** which state should be displayed?  */
    ObjectStore.prototype.syncScene = function (name) {
        this._sceneName = name;
    };
    return ObjectStore;
}(object_data_process_1.ObjectDataProcess));
exports.os = new ObjectStore();
console.log("哈哈", exports.os);
