"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Return a random int, used by `random.getUid()`.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @api private
 */
exports.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * Return a unique identifier with the given `length`.
 *
 * @param {Number} length
 * @return {String}
 * @api private
 */
exports.getUid = function (length) {
    if (length === void 0) { length = 10; }
    var uid = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charsLength = chars.length;
    for (var i = 0; i < length; ++i) {
        uid += chars[exports.getRandomInt(0, charsLength - 1)];
    }
    return uid;
};
exports.randomColor = function (transparent) {
    if (transparent === void 0) { transparent = false; }
    var range = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = "#";
    var len = 6;
    if (transparent)
        len = 8;
    for (var i = 0; i < len; i++) {
        color += range[exports.getRandomInt(0, 15)];
    }
    return color;
};
function sceneNameGenerator(type) {
    var uncertainCollection = [];
    var trees = ['🎄', '🎋', '🎍', '🌵', '🌴', '🌳', '🌲'];
    var animals = ['🦄', '🐷', '🐏', '🦒', '🐭', '🐇', '🐼', '🐒', '🦍'];
    var flora = ['💐', '🌸', '💮', '🏵️', '🌹', '🥀', '🌺', '🌻', '🌼', '🌷'];
    switch (type) {
        case 'animal':
            uncertainCollection = animals;
            break;
        case 'tree':
            uncertainCollection = trees;
            break;
        case 'flora': uncertainCollection = flora;
    }
    var emoji = uncertainCollection[exports.getRandomInt(0, uncertainCollection.length - 1)];
    var fullName = "" + emoji + exports.getUid(8) + emoji;
    return fullName;
}
exports.sceneNameGenerator = sceneNameGenerator;
