import { MENU_ROUTER } from './shared/emojis';
export declare const tuple: <T extends string[]>(...args: T) => T;
export declare const tupleNum: <T extends number[]>(...args: T) => T;
/**
 * https://stackoverflow.com/a/59187769
 * Extract the type of an element of an array/tuple without performing indexing
 */
export declare type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer E)[] ? E : never;
/**
 * https://github.com/Microsoft/TypeScript/issues/29729
 */
export declare type LiteralUnion<T extends U, U> = T | (U & {});
export declare type CompositionOfAPIFunction<O> = {
    [k in keyof O]?: <T>(data?: T) => Promise<T>;
};
export declare type PickValuesOfObjectArray<T extends [], K extends string> = T[number][K];
export declare type MathOperator = "+" | "-" | "*" | "/" | "%";
export declare type ExpectOperator = "==" | "===" | "!==" | "!=";
export declare type AvailableNav = typeof MENU_ROUTER[number]["nav"];
export declare enum SVGType {
    Class = 0,
    CodeSegment = 1,
    Constant = 2,
    Enum = 3,
    Field = 4,
    Function = 5,
    Interface = 6,
    Keyword = 7,
    Namespace = 8,
    Event = 9
}
export declare type ExistNativeType = 'symbol' | 'event' | 'function' | 'string' | 'number' | 'boolean' | 'object' | 'undefined' | 'null' | 'array' | 'object';
export declare function getType(value: unknown): ExistNativeType;
