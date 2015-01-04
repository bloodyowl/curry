var tape = require("tape")
var curry = require("..")

tape("curry", function(test){

  function map(func, array) {
    return array.map(func)
  }

  function square(number) {
    return Math.pow(number, 2)
  }

  function squareRoot(number) {
    return Math.sqrt(number)
  }

  var curriedMap = curry(map)
  var curriedSquareMap = curriedMap(square)
  var curriedSquareRootMap = curriedMap(squareRoot)

  test.deepEqual(
    curriedSquareMap([1, 2, 3, 4]),
    [1, 4, 9, 16]
  )

  test.deepEqual(
    curriedSquareRootMap([1, 4, 9, 16]),
    [1, 2, 3, 4]
  )

  test.end()

})

tape("curry #2", function(test){

  function add(a, b, c, d, e) {
    return a + b + c + d + e
  }

  var curriedAdd = curry(add)

  test.equal(
    curriedAdd(1, 2, 3, 4, 5),
    15
  )

  test.equal(
    curriedAdd(1, 2, 3, 4)(5),
    15
  )

  test.equal(
    curriedAdd(1, 2, 3)(4)(5),
    15
  )

  test.equal(
    curriedAdd(1, 2)(3)(4)(5),
    15
  )

  test.equal(
    curriedAdd(1)(2)(3)(4)(5),
    15
  )

  test.equal(
    curriedAdd(1)(2)(3, 4)(5),
    15
  )

  test.end()
})


tape("custom length", function(test){
  function add(a, b) {
   return Array.prototype.reduce.call(arguments, function(acc, item) {
     return acc + item
   }, 0)
  }

  var curriedAdd = curry(add, 5)

  test.equal(
    curriedAdd(1)(2)(3)(4)(5),
    15
  )

  test.equal(
    curriedAdd(1, 2)(3, 4, 5),
    15
  )

  test.end()
})
