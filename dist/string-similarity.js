"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* global exports, Map */
/**
 * Calculate similarity between two strings
 * @param {string} str1 First string to match
 * @param {string} str2 Second string to match
 * @param {number} [substringLength=2] Optional. Length of substring to be used in calculating similarity. Default 2.
 * @param {boolean} [caseSensitive=false] Optional. Whether you want to consider case in string matching. Default false;
 * @returns Number between 0 and 1, with 0 being a low match score.
 */
exports.stringSimilarity = (str1, str2, substringLength = 2, caseSensitive = false) => {
    if (!caseSensitive) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
    }
    if (str1.length < substringLength || str2.length < substringLength)
        return 0;
    const map = new Map();
    for (let i = 0; i < str1.length - (substringLength - 1); i++) {
        const substring = str1.substr(i, substringLength);
        map.set(substring, map.has(substring) ? map.get(substring) + 1 : 1);
    }
    let match = 0;
    for (let i = 0; i < str2.length - (substringLength - 1); i++) {
        const substring = str2.substr(i, substringLength);
        const count = map.has(substring) ? map.get(substring) : 0;
        if (count > 0) {
            map.set(substring, count - 1);
            match++;
        }
    }
    return (match * 2) / (str1.length + str2.length - ((substringLength - 1) * 2));
};
exports.default = exports.stringSimilarity;
//# sourceMappingURL=string-similarity.js.map