/**
* @license nested-property https://github.com/cosmosio/nested-property
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2020 Olivier Scherrer <pode.fr@gmail.com>
*/
declare const _default: {
    set: typeof setNestedProperty;
    get: typeof getNestedProperty;
    has: typeof hasNestedProperty;
    hasOwn: (object: any, property: any, options: any) => boolean;
    isIn: typeof isInNestedProperty;
};
export default _default;
/**
 * Get the property of an object nested in one or more objects or array
 * Given an object such as a.b.c.d = 5, getNestedProperty(a, "b.c.d") will return 5.
 * It also works through arrays. Given a nested array such as a[0].b = 5, getNestedProperty(a, "0.b") will return 5.
 * For accessing nested properties through all items in an array, you may use the array wildcard "+".
 * For instance, getNestedProperty([{a:1}, {a:2}, {a:3}], "+.a") will return [1, 2, 3]
 * @param {Object} object the object to get the property from
 * @param {String} property the path to the property as a string
 * @returns the object or the the property value if found
 */
declare function getNestedProperty(object: any, property: any): any;
/**
 * Tell if a nested object has a given property (or array a given index)
 * given an object such as a.b.c.d = 5, hasNestedProperty(a, "b.c.d") will return true.
 * It also returns true if the property is in the prototype chain.
 * @param {Object} object the object to get the property from
 * @param {String} property the path to the property as a string
 * @param {Object} options:
 *  - own: set to reject properties from the prototype
 * @returns true if has (property in object), false otherwise
 */
declare function hasNestedProperty(object: any, property: any, options?: any): boolean;
/**
 * Set the property of an object nested in one or more objects
 * If the property doesn't exist, it gets created.
 * @param {Object} object
 * @param {String} property
 * @param value the value to set
 * @returns object if no assignment was made or the value if the assignment was made
 */
declare function setNestedProperty(object: any, property: any, value: any): any;
/**
 * Tell if an object is on the path to a nested property
 * If the object is on the path, and the path exists, it returns true, and false otherwise.
 * @param {Object} object to get the nested property from
 * @param {String} property name of the nested property
 * @param {Object} objectInPath the object to check
 * @param {Object} options:
 *  - validPath: return false if the path is invalid, even if the object is in the path
 * @returns {boolean} true if the object is on the path
 */
declare function isInNestedProperty(object: any, property: any, objectInPath: any, options?: any): boolean;
