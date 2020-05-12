/**
 * This function is a multifunction which take 2 arguments that used to reserve ObjectState for you in your page,
 * you can call this function multi times in the same page or other pages.
 * @template T is object type  like `{} , {age:5} , {age:5, cardNames:[100,200,300]}` all were valid.
 * @param initO  The data object typeof `T` which want to reserve data for you
 * @param [option]
 * @returns  { object,updateObject,recover,}
 */
export declare function useObject<T extends {
    [key: string]: any;
}>(initO: T, option?: {
    /**
     *In supervise mode only... remember that  `Do Not Use` the same `name` in the project otherwise stateName in the panel will be rendered only once...
     * sceneName =   'name1' or 'name2'  were corrent.
     * sceneName =  'abc' or 'abc' were incorrent.
     */
    sceneName?: string;
}): {
    object: T;
    updateObject: {
        (obj: Partial<T>): void;
        <P extends keyof T>(key: P, value: T[P]): void;
    };
    recover: {
        (): void;
        (omit?: (keyof T)[] | undefined): void;
    };
};
