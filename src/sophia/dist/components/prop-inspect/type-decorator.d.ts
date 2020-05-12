import React, { FC, DOMAttributes, ReactNode } from 'react';
export declare const ColorfulRows: (props: {
    objectKey: string;
    value: string;
    badgeWidth?: number | undefined;
}) => JSX.Element;
export declare const CSpan: FC<{
    color?: string;
    ml?: string | number;
    className?: string;
    style?: React.CSSProperties;
} & DOMAttributes<HTMLSpanElement>>;
/**This function will be rendered the each property of an object or an item of an Array */
export declare const RenderPropertyOfObjectOrArray: (props: {
    objectKey: string;
    value: any;
    objHierarchy: string;
}) => JSX.Element;
export declare const RenderFuncInParameters: FC<{
    value: Function;
    shouldExecute: number;
}>;
/** This function give you a ablitiy to edit string value which came from the  `datasource` perhaps it took much time to calculation */
export declare const RenderEditableString: FC<{
    prefix: ReactNode;
    affix: ReactNode;
    value: string;
    fieldName: string;
    hierarchy: string;
    nextHierarchy?: string | null;
    fromType?: 'object' | 'array';
}>;
