[![Build Status](https://travis-ci.org/stephenjjbrown/string-similarity-js.svg?branch=master)](https://travis-ci.org/stephenjjbrown/string-similarity-js)
[![codecov](https://codecov.io/gh/stephenjjbrown/string-similarity-js/branch/master/graph/badge.svg)](https://codecov.io/gh/stephenjjbrown/string-similarity-js)
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1f8dbc1fcb584d818c21869f4742f936)](https://www.codacy.com/gh/stephenjjbrown/string-similarity-js/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=stephenjjbrown/string-similarity-js&amp;utm_campaign=Badge_Grade)

# String Similarity

A simple, lightweight (~700 bytes minified) string similarity function based on comparing the number of bigrams in common between any two strings. Returns a score between 0 and 1 indicating the strength of the match.

Based on the [Sørensen–Dice coefficient](https://en.wikipedia.org/wiki/Sørensen–Dice_coefficient), this algorithm is most effective at detecting rearranged words or misspellings. It tends to be less effective with very short strings, unless perhaps you switch to comparing individual characters in common instead of bigrams.

It is case insensitive unless you specify otherwise. Does not ignore punctuation or spaces. In some cases, removing punctuation beforehand may improve accuracy.

### Update
Version 2.0 optimizes the algorithm from O(n<sup>2</sup>) time complexity to O(n), and switches from using an array for bigrams to a Map, which was found to be substantially faster in performance tests.

## Usage

### Requirements
This library uses built-in [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) data structure for optimal performance. Therefore, it requires at least IE11 or a polyfill for Map.

### Examples

```typescript
import { stringSimilarity } from "string-similarity-js";

// Rearranged words
stringSimilarity("Lorem ipsum", "Ipsum lorem")
// Returns a score of 0.9

// Typos
stringSimilarity("The quick brown fox jumps over the lazy dog", "The quck brown fx jumps over the lazy dog")
// 0.92

// Even more different
stringSimilarity("The quick brown fox jumps over the lazy dog", "The quack brain fax jomps odor the lady frog")
// 0.65

// Completely different strings
stringSimilarity("The quick brown fox jumps over the lazy dog", "Lorem ipsum")
// 0.07

// Tiny strings are less effective with default settings
stringSimilarity("DMV", "DNV")
// Returns 0, because technically there are no bigrams in common between the two

// Passing in a substring length of 1 may improve accuracy on tiny strings
stringSimilarity("DMV", "DNV", 1)
// Returns 0.67, the percentage of letters in common between the two
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details