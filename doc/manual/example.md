### Evaluation methods

```js
let fitness = evaluate( solution , mutation ) ;
```

### Application methods

```js
apply( solution , mutation ) ;
```

### Walking methods

```js
for ( const mutation of walk( solution ) ) ... ;
```

### Acceptance methods

```js
if ( accept( fitness , best ) ) ... ;
```

### Pivoting methods

The signature of a pivoting method is the following

```js
let [ mutation , fitness ] = pivoting( [ solution , best ] , walk , evaluate ) ;
```

### Search methods

Global and local search methods either halt or loop forerver. In order to
maintain a fine-grained step count, every step of the search method will yield
a solution. This means there will be a lot of repetitions.

#### Halting

You can iterate over all candidates

```js
for ( const [ candidate , fitness ] of localsearch( [ solution , best ] ) ) ... ;
```

To keep only the best candidate, maximize over fitness

```js
import { increasing , attr } from '@aureooms/js-compare' ;
import { max } from '@aureooms/js-itertools' ;
let [ candidate , fitness ] = max( attr( increasing , 1 ) , localsearch( [ solution , best ] ) ) ;
```

#### Non-halting

For non-halting methods you can restrict your search to
the first `n` candidates

```js
import { head } from '@aureooms/js-itertools' ;
for ( const [ candidate , fitness ] of head( localsearch( solution , best ) , n ) ) ... ;
```
The same is valid for selecting the best of the first `n` candidates

```js
import { increasing , attr } from '@aureooms/js-compare' ;
import { head , max } from '@aureooms/js-itertools' ;
let [ candidate , fitness ] = max( attr( increasing , 1 ) , head( localsearch( [ solution , best ] ) , n ) ) ;
```
