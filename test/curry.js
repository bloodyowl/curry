var tape = require("tape")
  , curry = require("../curry")

tape(function(test){
  
  var curried = curry(add)
    , curriedLength = curry(addNoLimit, 4)
    , curriedThisValue = curry(getThisValue, null, {foo:"bar"})
  
  function add(a,b,c,d){
    return a + b + c + d
  }
  
  function addNoLimit(){
    var args = arguments
      , l = args.length
      , r = 0
    while(--l > -1) {
      r += args[l]
    }
    return r
  }
  
  function getThisValue(a){
    return this
  }
  
  test.equal(curriedThisValue(1).foo, "bar", "Passes thisValue")
  test.equal(curried(1)(2)(3)(4), 10, "Curry one param")
  test.equal(curried(1, 2)(3, 4), 10, "Curry with multiple")
  test.equal(curried(1, 2, 3, 4), 10, "Curry with one call")
  test.equal(curried(1, 2)(3, 4, 5), 10, "Curry with one extra param")
  test.equal(curriedLength(1, 2)(3, 4), 10, "Curry with limit set manually")
  test.end()

})
