const getSubstrings = (str: string, substringLength: number) => {
	let result = [];
	if (substringLength < 2 || substringLength > str.length - 1)
		return result;
	for (let i = 0; i < str.length - (substringLength - 1); i++) {
		result.push(str.substr(i, substringLength));
	}
	return result;
}

const getStringSimilarity = (str1: string, str2: string, substringLength?: number, caseSensitive?: boolean) => {
	if (!substringLength)
		substringLength = 2; // Assume letter pairs

	if (str1.length == 0 || str2.length == 0)
		return 0;

	if (!caseSensitive) {
		str1 = str1.toLowerCase();
		str2 = str2.toLowerCase();
	}

	const substrings1 = getSubstrings(str1, substringLength);
	const substrings2 = getSubstrings(str2, substringLength);

	const union = substrings1.length + substrings2.length;
	
	let result = 0;
	for (const x of substrings1) {
		for (let i = 0; i < substrings2.length; i++) {
			const y = substrings2[i];
			if (x === y) {
				result++;
				substrings2.splice(i, 1);
				break;
			}
		}
	}

	if (result > 0)
		return (result * 2) / union;

	return result;
}