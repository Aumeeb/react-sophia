import { CSSProperties } from "react";
export declare const ITALIC: CSSProperties;
export declare const INLINE_BLOCK: CSSProperties;
export declare const INLINE_FLEX: CSSProperties;
export declare const FLEX: CSSProperties;
export declare const StringTypeStyle: {
    hovered: {
        border: number;
        borderStyle: string;
        borderColor: string;
        borderRadius: number;
        cursor: string;
    };
    normal: {};
};
export declare function toPixel(val: number): string;
