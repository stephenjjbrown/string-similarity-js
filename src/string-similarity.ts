const getSubstrings = (str: string, substringLength: number) => {
	let result = [];
	if (substringLength < 2 || substringLength > str.length - 1)
		return result;
	for (let i = 0; i < str.length - (substringLength - 1); i++) {
		result.push(str.substr(i, substringLength));
	}
	return result;
}

/**
 * Calculate similarity between two strings
 * @param str1 First string to match
 * @param str2 Second string to match
 * @param substringLength Optional. What length of substring should be used in calculating similarity. Default 2.
 * @param caseSensitive Optional. Whether you want to consider case in string matching. Default false;
 * @returns Number between 0 and 1, with 0 being a low match score.
 */
const getStringSimilarity = (str1: string, str2: string, substringLength?: number, caseSensitive?: boolean): number => {
	if (!substringLength)
		substringLength = 2; // Assume letter pairs

	if (str1.length === 0 || str2.length === 0)
		return 0;

	if (!caseSensitive) {
		str1 = str1.toLowerCase();
		str2 = str2.toLowerCase();
	}

	const substrings1 = getSubstrings(str1, substringLength), substrings2 = getSubstrings(str2, substringLength);
	const combinedLength = substrings1.length + substrings2.length;
	
	let result = 0;
	for (const x of substrings1) {
		for (let i = 0; i < substrings2.length; i++) {
			const y = substrings2[i];
			if (x === y) {
				result++;
				substrings2.splice(i, 1); // Remove from consideration in rest of loop
				break;
			}
		}
	}

	if (result > 0)
		return (result * 2) / combinedLength;

	return result;
}