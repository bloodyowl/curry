;(function(root, name, fn){
  var exports = fn(root)
  if(typeof define == "function" && define.amd) return define(exports)
  if(typeof module !== 'undefined' && module.exports) module.exports = exports
  root[name] = exports
})(this, "curry", function(){

  var nativeConcat = [].concat
    , nativeSlice = [].slice
    , hasOwnProperty = {}.hasOwnProperty

  function createCurried(fn, args, length, thisValue){
    function curried(){
      var currentArgs = nativeConcat.apply(args, arguments)
      if(length - currentArgs.length <= 0) {
        return fn.apply(thisValue === void 0 ? this : thisValue, currentArgs)
      }
      return createCurried(fn, currentArgs, length, thisValue)
    }
    curried.prototype = fn.prototype
    return curried
  }

  function curry(fn, length, thisValue){
    length = typeof length == "number" ? length : fn.length
    return createCurried(fn, [], length, thisValue)
  }
  
  return curry
})