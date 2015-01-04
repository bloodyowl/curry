# curry

[![Build Status](https://travis-ci.org/bloodyowl/curry.png?branch=master)](https://travis-ci.org/bloodyowl/curry)

## install

```console
$ npm install bloody-curry
```

## require

```javascript
var curry = require("curry")
```

simple currying script

```javascript
function add(a,b,c,d){
  return a + b + c + d
}

var addToOne = curry(add)(1)
addToOne(1,2,3) // -> 7
addToOne(1)(2)(3) // -> 7
```

## api

### curry(func[, number:length])

Returns a curried function that keeps returning a function until the sum of
the passed arguments's length reaches `length` (if defined) or `fn.length`.

## [license](LICENSE.md)
