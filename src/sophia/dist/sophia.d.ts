import { FC } from 'react';
import './sophia.css';
export declare const Sophia: FC<ISophia>;
export interface ISophia {
    /**It should be a single emoji String for best presentation, you can search emoji on google as you like 😀 */
    emojiIcon?: string;
    supervise?: boolean;
}
