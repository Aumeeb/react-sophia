import { ReactNode } from 'react';
import { ExistNativeType } from '../../type';
export declare const TYPE_COLORS: {
    function: string;
    string: string;
    number: string;
    event: string;
    boolean: string;
    null_undefined: string;
    object: string;
    array: string;
    symbol: string;
};
export declare class DrawNativeTypeRow implements Omit<getNativeTypeDescription, 'getNativeTypeDescription'> {
    protected value: any;
    protected fieldName: string;
    hierarchy: string;
    standby?: {
        nextHierarchyFieldName?: string | undefined;
        curHierarchyType?: "object" | "array" | undefined;
    } | undefined;
    private size;
    constructor(value: any, fieldName: string, hierarchy: string, standby?: {
        nextHierarchyFieldName?: string | undefined;
        curHierarchyType?: "object" | "array" | undefined;
    } | undefined);
    textTextColor: string;
    getNativeTypeDescription(): NativeTypeDescription | undefined;
    getDefualtTypeSVG(): JSX.Element;
    getRegularBody(prefix?: ReactNode, affix?: ReactNode): JSX.Element;
    getStringBody(prefix?: ReactNode, affix?: ReactNode): JSX.Element;
    getShrunkenObjectBody(): JSX.Element;
    getShrunkenArrayBody(arr: any[]): JSX.Element;
    getFunctionBody(): JSX.Element;
    /** for array */
    getArrayBody(deepLevel?: number): ReactNode;
    getObjectBody(obj: {
        [key: string]: any;
    }): ReactNode;
    getSeparatorNode(separator?: ReactNode): ReactNode;
}
interface getNativeTypeDescription {
    getNativeTypeDescription(): NativeTypeDescription;
    textTextColor: string;
}
export interface NativeTypeDescription {
    typeRange: Array<ExistNativeType>;
    typeTextColor: string;
    badges: Array<{
        behave: 'invoke' | 'hint';
        display: boolean;
        emoji: string;
        descrition: ReactNode | string;
    }>;
    mainBody?: ReactNode;
    beforeNode?: ReactNode;
    afterNode?: ReactNode;
    self: DrawNativeTypeRow;
}
export {};
