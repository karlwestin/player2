


/*
 * comp
 * takes a list of functions,
 * applies them to passed in args, left - right
 */
export function comp() {
  var funcs = Array.prototype.slice.call(arguments, 0).reverse();
  return function() {
    return funcs.reduce(function(sum, item) {
      return [item.apply(null, sum)]
    }, arguments)[0];
  }
}

export function hashToRenderable(obj) {
  return Object.keys(obj).map(function(el) {
    return { title: el };
  });
}
