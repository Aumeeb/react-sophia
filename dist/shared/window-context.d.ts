import React, { FC } from 'react';
interface WindowProps {
    browserWidth?: number;
    browserHeight?: number;
    windowEv?: MouseEvent | null;
}
export declare const browserWindowContext: React.Context<WindowProps>;
export declare const BrowserPropsProvider: FC<WindowProps>;
export {};
