var nativePush = [].push

function createCurried(func, length, currentArgs){

  function curried() {
    var args = arguments

    var concatenatedArgs = []
    nativePush.apply(concatenatedArgs, currentArgs)
    nativePush.apply(concatenatedArgs, args)

    if(concatenatedArgs.length >= length) {
      return func.apply(this, concatenatedArgs)
    }

    return createCurried(
      func,
      length,
      concatenatedArgs
    )
  }

  return curried
}

function curry(func, length) {
  if(length == null) {
    length = func.length
  }
  return createCurried(func, length, [])
}

module.exports = curry
