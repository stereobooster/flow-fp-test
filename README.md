# Flow and FP experiments

```
yarn flow
yarn run v1.3.2
Error: index.js:3
  3: const t = require("io-ts");
                       ^^^^^^^ io-ts. Required module not found

Error: other/PathReporter.js:3
  3: import type { ValidationError } from './index'
                   ^^^^^^^^^^^^^^^ Named import from module `./index`. This module only has a default export. Did you mean `import ValidationError from ...`?

Error: other/Reporter.js:2
  2: import type { Validation } from './index'
                   ^^^^^^^^^^ Named import from module `./index`. This module only has a default export. Did you mean `import Validation from ...`?

Error: other/index.js:2
  2: import type { Either } from 'fp-ts/lib/Either'
                                 ^^^^^^^^^^^^^^^^^^ fp-ts/lib/Either. Required module not found

Error: other/index.js:3
  3: import type { Predicate } from 'fp-ts/lib/function'
                                    ^^^^^^^^^^^^^^^^^^^^ fp-ts/lib/function. Required module not found


Found 5 errors
```