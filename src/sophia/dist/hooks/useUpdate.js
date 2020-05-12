"use strict";
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
function useUpdate() {
    var _a = __read(react_1.useState(Date.now()), 2), update = _a[0], _setUpdate = _a[1];
    function setUpdate() {
        _setUpdate(Date.now());
    }
    return {
        update: update,
        setUpdate: setUpdate,
    };
}
exports.useUpdate = useUpdate;
