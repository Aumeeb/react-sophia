/**
 * Return a random int, used by `random.getUid()`.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @api private
 */
export declare const getRandomInt: (min: number, max: number) => number;
/**
 * Return a unique identifier with the given `length`.
 *
 * @param {Number} length
 * @return {String}
 * @api private
 */
export declare const getUid: (length?: number) => string;
export declare const randomColor: (transparent?: boolean) => string;
export declare type SceneRegion = "animal" | "tree" | "flora";
export declare function sceneNameGenerator(type: SceneRegion): string;
