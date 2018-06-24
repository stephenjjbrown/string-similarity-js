[![Build Status](https://travis-ci.org/stephenjjbrown/string-similarity-js.svg?branch=master)](https://travis-ci.org/stephenjjbrown/string-similarity-js)
[![codecov](https://codecov.io/gh/stephenjjbrown/string-similarity-js/branch/master/graph/badge.svg)](https://codecov.io/gh/stephenjjbrown/string-similarity-js)
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

# String Similarity

A simple, lightweight string similarity function based on comparing the number of substrings (typically bigrams) in common between any two strings. Returns a score between 0 and 1 indicating the strength of the match.

Loosely based on the [Sørensen–Dice coefficient](https://en.wikipedia.org/wiki/Sørensen–Dice_coefficient), this algorithm is most effective at detecting rearranged words or misspellings. It tends to be less effective with very short strings unless you pass in substringLength of 1 (returning number of letters in common).

It is case insensitive unless you specify case sensitivity. Does not ignore punctuation or spaces. In some cases, removing punctuation beforehand may improve matching accuracy.

## Usage

```typescript
import {getStringSimilarity} from "string-similarity";

// Rearranged words
getStringSimilarity("Lorem ipsum", "Ipsum lorem")
// Returns a score of 0.9

// Typos
getStringSimilarity("The quick brown fox jumps over the lazy dog", "The quck brown fx jumps over the lazy dog")
// 0.92

// Even more different
getStringSimilarity("The quick brown fox jumps over the lazy dog", "The quack brain fax jomps odor the lady frog")
// 0.65

// Completely different strings
getStringSimilarity("The quick brown fox jumps over the lazy dog", "Lorem ipsum")
// 0.07

// Tiny strings are less effective with default settings
getStringSimilarity("DMV", "DNV")
// Returns 0, because technically there are no bigrams in common between the two

// Passing in a substring length of 1 may improve accuracy on tiny strings
getStringSimilarity("DMV", "DNV", 1)
// Returns 0.67, the percentage of letters in common between the two
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details