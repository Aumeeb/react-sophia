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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Books = [
    {
        name: 'Tina',
        id: 1,
        age: 16,
    },
    {
        name: 'Iera',
        id: 2,
        age: 13,
    },
    {
        name: 'Linas',
        id: 3,
        age: 15,
    },
];
var api = {
    getTable: function () {
        return Promise.resolve([{ name: 'lee', age: 5 }]);
    },
    getBooks: function () {
        return Promise.resolve(Books);
    },
    searchBook: function (id) {
        var found = Books.filter(function (p) { return +p.id === +id; });
        return Promise.resolve(found);
    },
};
exports.BookContext = react_1.default.createContext({});
function _(props) {
    var _a = __read(react_1.useState(__assign({ name: 'lee' }, api)), 2), state = _a[0], setState = _a[1];
    return react_1.default.createElement(exports.BookContext.Provider, { value: state }, props.children);
}
exports.BookContextProvider = function (props) {
    return react_1.default.createElement(_, __assign({}, props), props.children);
};
