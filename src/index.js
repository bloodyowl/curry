function createCurried(func, length, currentArgs){

  function curried(...args) {
    const concatenatedArgs = [
      ...currentArgs,
      ...args,
    ]

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

export default curry
