


/*
 * comp
 * takes a list of functions,
 * applies them to passed in args, left - right
 */
export function comp() {
  var funcs = Array.prototype.slice.call(arguments, 0).reverse();
  return function() {
    return funcs.reduce(function(sum, item) {
      return [item.apply(null, sum)];
    }, arguments)[0];
  }
}

export function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function extend(map) {
  map = copy(map);
  var adders = Array.prototype.slice.call(arguments, 1);
  adders.forEach(function(obj) {
    keys(obj).forEach(function(key) {
      map[key] = obj[key];
    });
  });
  return map;
}

export function hashMap() {
  var map = {};
  var items = Array.prototype.slice.call(arguments, 0);
  if(items.length % 2 !== 0) {
    throw new Error('pass an even number of args to hashMap');
  }

  for(var i = 0; i < items.length; i += 2) {
    map[items[i]] = items[i + 1];
  }

  return map;
}

export function keys(obj) {
  return Object.keys(obj);
}

export function hashToRenderable(obj) {
  return keys(obj).map(function(el) {
    return { title: el };
  });
}

export function assoc(obj) {
  obj = copy(obj);
  var add = Array.prototype.slice.call(arguments, 1);
  add = hashMap.apply(null, add);
  return extend(obj, add);
}

export function dissoc(obj) {
  obj = copy(obj);
  var remove = Array.prototype.slice.call(arguments, 1);
  remove.forEach(function(key) { delete obj[key]; });
  return obj;
}

// this flatten function is a little weak, only flattens one level
export function flatten() {
  return Array.prototype.concat.apply([], arguments);
}
