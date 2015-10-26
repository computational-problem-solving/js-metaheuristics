[js-metaheuristics](http://aureooms.github.io/js-metaheuristics)
==

Metaheuristic code bricks for JavaScript.

```js
for ( const [ candidate , fitness ] of localsearch( [ solution , best ] ) ) ... ;
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-metaheuristics.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-metaheuristics/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-metaheuristics.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-metaheuristics)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-metaheuristics.svg?style=flat)](http://bower.io/search/?q=aureooms-js-metaheuristics)
[![Build Status](http://img.shields.io/travis/aureooms/js-metaheuristics.svg?style=flat)](https://travis-ci.org/aureooms/js-metaheuristics)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-metaheuristics.svg?style=flat)](https://coveralls.io/r/aureooms/js-metaheuristics)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-metaheuristics.svg?style=flat)](https://david-dm.org/aureooms/js-metaheuristics#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-metaheuristics.svg?style=flat)](https://david-dm.org/aureooms/js-metaheuristics#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-metaheuristics.svg?style=flat)](https://codeclimate.com/github/aureooms/js-metaheuristics)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-metaheuristics.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-metaheuristics)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-metaheuristics.svg?style=flat)](https://github.com/aureooms/js-metaheuristics/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-metaheuristics.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-metaheuristics)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-metaheuristics
# or
jspm install npm:aureooms-js-metaheuristics
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-metaheuristics
```

### bower
```terminal
bower install aureooms-js-metaheuristics
```

### ender
```terminal
ender add aureooms-js-metaheuristics
```

### jam
```terminal
jam install aureooms-js-metaheuristics
```

### spm
```terminal
spm install aureooms-js-metaheuristics --save
```

### npm
```terminal
npm install aureooms-js-metaheuristics --save
```

## Require
### jspm
```js
let metaheuristics = require( "github:aureooms/js-metaheuristics" ) ;
// or
import metaheuristics from 'aureooms-js-metaheuristics' ;
```
### duo
```js
let metaheuristics = require( "aureooms/js-metaheuristics" ) ;
```

### component, ender, spm, npm
```js
let metaheuristics = require( "aureooms-js-metaheuristics" ) ;
```

### bower
The script tag exposes the global variable `metaheuristics`.
```html
<script src="bower_components/aureooms-js-metaheuristics/js/dist/metaheuristics.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-metaheuristics" ] , function ( metaheuristics ) { ... } ) ;
```

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

For non-halting methods you can restrict your search to
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
