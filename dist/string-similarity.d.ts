/**
 * Calculate similarity between two strings
 * @param {string} str1 First string to match
 * @param {string} str2 Second string to match
 * @param {number} [substringLength=2] Optional. What length of substring should be used in calculating similarity. Default 2.
 * @param {boolean} [caseSensitive=false] Optional. Whether you want to consider case in string matching. Default false;
 * @returns Number between 0 and 1, with 0 being a low match score.
 */
export declare const getStringSimilarity: (str1: string, str2: string, substringLength?: number | undefined, caseSensitive?: boolean | undefined) => number;
export default getStringSimilarity;
