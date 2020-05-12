/// <reference types="react" />
import { LimitedReversedActive } from "../components/menu";
import { ObjectDataProcess } from "./object-data-process";
declare class ObjectStore extends ObjectDataProcess {
    private _system_menu_useState;
    private _sceneName;
    private _registeredStateName;
    private readonly treasures;
    config: {
        isSupervise: boolean;
    };
    get currentScene(): {
        sceneName: string;
        object: any;
        set: (value: any) => void;
    };
    getMenuStateReturnAction(): UseStateReturnInfo;
    addMenuAction(act: UseStateReturnInfo): void;
    formatTabNames(): FormatedTabsNameData[];
    /**To get count of the state objects. */
    get count(): number;
    /**Get the alias names of all state objects*/
    get scenes(): string[];
    /** Automatically store the state object to the storage */
    collectObject<S>(key: string, value: StatePool<S>): boolean;
    registerState(name: string): boolean;
    /** To getStateObject  */
    get(key: string): StatePool<any> | undefined;
    getMaster(): StatePool<any> | undefined;
    /** which state should be displayed?  */
    syncScene(name: string): void;
}
export declare const os: ObjectStore;
declare type FormatedTabsNameData = {
    tabName: string;
    select: boolean;
};
declare type StatePool<S> = {
    treasure: S;
    setTreasure: React.Dispatch<React.SetStateAction<S>>;
};
declare type UseStateReturnInfo = {
    sence: LimitedReversedActive;
    action: {
        o: {};
        setO: any;
    };
} | null;
export {};
