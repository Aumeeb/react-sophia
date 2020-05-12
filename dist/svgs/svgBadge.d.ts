/// <reference types="react" />
import * as SVG from '.';
export declare const path: string;
export declare enum SVGType {
    Class = "class.svg",
    CodeSegment = "codesegments.svg",
    Constant = "const.svg",
    Enum = "enum.svg",
    Field = "field.svg",
    Function = "function.svg",
    Interface = "interface.svg",
    Keyword = "keyword.svg",
    Namespace = "namespace.svg",
    Event = "event.svg"
}
declare type SVGIconName = 'wrench';
export declare function isConst(str: string): boolean;
export declare function isEvent(str: string): boolean;
export declare function getSVG(value: any): (props: SVG.SVGBlockSize) => JSX.Element;
export declare function getExtraSVG(value: SVGIconName): (props: SVG.SVGBlockSize) => JSX.Element;
export {};
