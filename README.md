# curry.js

[![Build Status](https://travis-ci.org/bloodyowl/curry.png?branch=master)](https://travis-ci.org/bloodyowl/curry)

[![browser support](https://ci.testling.com/bloodyowl/curry.png)
](https://ci.testling.com/bloodyowl/curry)

simple currying script

```javascript
var curry = require("curry")

function add(a,b,c,d){
  return a + b + c + d
}

var addToOne = curry(add)(1)
addToOne(1,2,3) // -> 7
addToOne(1)(2)(3) // -> 7
```

## API

### `curry(function:fn[, number:length][, any:thisValue])`

Returns a curried function that keeps returning a function until the sum of the passed arguments's length reaches `length` (if defined) or `fn.length`. An optional `thisValue` can be defined. 

## Run tests

```
$ npm test
```
