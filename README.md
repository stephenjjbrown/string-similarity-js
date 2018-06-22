[![Build Status](https://travis-ci.org/stephenjjbrown/string-similarity-js.svg?branch=master)](https://travis-ci.org/stephenjjbrown/string-similarity-js)
[![codecov](https://codecov.io/gh/stephenjjbrown/string-similarity-js/branch/master/graph/badge.svg)](https://codecov.io/gh/stephenjjbrown/string-similarity-js)
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

# String Similarity

A simple, lightweight string similarity function based on comparing the number of substrings (typically letter pairs) in common between any two strings. Returns a score between 0 and 1 indicated the strength of the match.

~500 bytes minified

This algorithm is most effective at detecting rearranged words or misspellings. It tends to be less effective with very short strings. Always returns 0 for strings <= 2 characters in length. Does not ignore punctuation or spaces.

## Usage

```typescript
import {getStringSimilarity} from "string-similarity";

// Rearranged words
getStringSimilarity("Lorem ipsum", "Ipsum lorem") // Returns a score of 0.9

// Typos
getStringSimilarity("The quick brown fox jumps over the lazy dog", "The quck brwn fox jumps over the lazy dog") // Returns ~0.92

```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details