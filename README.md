# String Similarity

Lightweight-but-effective string similarity function based on comparing common substrings of a given length (usually letter pairs)

This algorithm is usually most effective at detecting rearranged words or slight misspellings. It tends to be less effective with very short strings.

# Usage

```
import {getStringSimilarity} from "string-similarity";

getStringSimilarity("Lorem ipsum", "Ipsum lorem")
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details