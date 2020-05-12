"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITALIC = {
    fontStyle: "italic"
};
exports.INLINE_BLOCK = {
    display: "inline-block"
};
exports.INLINE_FLEX = {
    display: 'inline-flex'
};
exports.FLEX = {
    display: 'flex',
};
// border: 1px solid #5f5f5f;
// border-radius: 2px;
// border-style: dashed;
// padding: 2px;
exports.StringTypeStyle = {
    hovered: {
        border: 1,
        borderStyle: 'dashed',
        borderColor: '#5f5f5f',
        borderRadius: 2,
        cursor: "pointer",
    },
    normal: {}
};
function toPixel(val) {
    return val + 'px';
}
exports.toPixel = toPixel;
