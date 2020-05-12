import { FC } from 'react';
import './index.css';
import { AvailableNav } from '../../type';
export declare type LimitedReversedActiveSceneName = '5a947008-9044-11ea-bb37-0242ac130002';
export declare type LimitedReversedActive = {
    sceneName: string;
    tag: LimitedReversedActiveSceneName;
};
export declare const LIMITED_SCENES_TAG: LimitedReversedActive;
export declare const Menu: FC<MenuProps>;
export interface MenuProps {
    minWidth: number;
    maxWidth: number;
    emojiIcon?: string;
    scale?: number;
    offsetTop?: number;
    offsetLeft?: number;
    throb?: boolean;
    supervise?: boolean;
    menuName: readonly {
        name: string;
        nav: AvailableNav;
    }[];
}
