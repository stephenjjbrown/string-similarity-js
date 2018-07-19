"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* global exports */
var getSubstrings = function (str, substringLength) {
    var result = [];
    for (var i = 0; i < str.length - (substringLength - 1); i++)
        result.push(str.substr(i, substringLength));
    return result;
};
/**
 * Calculate similarity between two strings
 * @param {string} str1 First string to match
 * @param {string} str2 Second string to match
 * @param {number} [substringLength=2] Optional. Length of substring to be used in calculating similarity. Default 2.
 * @param {boolean} [caseSensitive=false] Optional. Whether you want to consider case in string matching. Default false;
 * @returns Number between 0 and 1, with 0 being a low match score.
 */
exports.stringSimilarity = function (str1, str2, substringLength, caseSensitive) {
    if (substringLength === void 0) { substringLength = 2; }
    if (caseSensitive === void 0) { caseSensitive = false; }
    if (!caseSensitive) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
    }
    if (str1.length < substringLength || str2.length < substringLength)
        return 0;
    if (str1 === str2)
        return 1;
    var substrings1 = getSubstrings(str1, substringLength);
    var substrings2 = getSubstrings(str2, substringLength);
    var combinedLength = substrings1.length + substrings2.length;
    var result = 0;
    for (var _i = 0, substrings1_1 = substrings1; _i < substrings1_1.length; _i++) {
        var x = substrings1_1[_i];
        for (var i = 0; i < substrings2.length; i++) {
            var y = substrings2[i];
            if (x === y) {
                result++;
                substrings2.splice(i, 1); // Remove from consideration in rest of loop
                break;
            }
        }
    }
    return result > 0 ? (result * 2) / combinedLength : 0;
};
exports.default = exports.stringSimilarity;
//# sourceMappingURL=string-similarity.js.map