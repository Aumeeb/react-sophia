"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var draggable_1 = require("./components/draggable");
var menu_1 = require("./components/menu");
require("./sophia.css");
var emojis_1 = require("./shared/emojis");
exports.Sophia = function (props) {
    var _a;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(draggable_1.Draggable, { className: "grdq2a0x2p6xt" },
            react_1.default.createElement(menu_1.Menu, { minWidth: 200, maxWidth: 600, supervise: props.supervise, emojiIcon: (_a = props.emojiIcon) !== null && _a !== void 0 ? _a : '🎊', scale: 3, throb: true, menuName: emojis_1.MENU_ROUTER }))));
};
