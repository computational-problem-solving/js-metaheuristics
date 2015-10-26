[js-ho](http://aureooms.github.io/js-ho)
==

Metaheuristic code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-ho.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-ho/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-ho.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-ho)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-ho.svg?style=flat)](http://bower.io/search/?q=aureooms-js-ho)
[![Build Status](http://img.shields.io/travis/aureooms/js-ho.svg?style=flat)](https://travis-ci.org/aureooms/js-ho)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-ho.svg?style=flat)](https://coveralls.io/r/aureooms/js-ho)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-ho.svg?style=flat)](https://david-dm.org/aureooms/js-ho#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-ho.svg?style=flat)](https://david-dm.org/aureooms/js-ho#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-ho.svg?style=flat)](https://codeclimate.com/github/aureooms/js-ho)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-ho.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-ho)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-ho.svg?style=flat)](https://github.com/aureooms/js-ho/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-ho.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-ho)


## Use

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
import { increasing , attr } from 'aureooms-js-compare' ;
import { max } from 'aureooms-js-itertools' ;
let [ candidate , fitness ] = max( attr( increasing , 1 ) , localsearch( [ solution , best ] ) ) ;
```

#### Non-halting

For non-halting methods you can also only restrict your search to
the first `n` candidates

```js
import { head } from 'aureooms-js-itertools' ;
for ( const [ candidate , fitness ] of head( localsearch( solution , best ) , n ) ) ... ;
```
The same is valid for selecting the best of the first `n` candidates

```js
import { increasing , attr } from 'aureooms-js-compare' ;
import { head , max } from 'aureooms-js-itertools' ;
let [ candidate , fitness ] = max( attr( increasing , 1 ) , head( localsearch( [ solution , best ] ) , n ) ) ;
```
