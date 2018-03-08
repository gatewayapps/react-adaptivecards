// Javascript Deep Compare function compliments of Jean Vincent
// https://stackoverflow.com/a/6713782/4279849

export default function compare (a, b) {
  if (a === b) return true
  // if both a and b are null or undefined and exactly the same

  if (!(a instanceof Object) || !(b instanceof Object)) return false
  // if they are not strictly equal, they both need to be Objects

  if (a.constructor !== b.constructor) return false
  // they must have the exact same prototype chain, the closest we can do is
  // test there constructor.

  for (var p in a) {
    if (!a.hasOwnProperty(p)) continue
    // other properties were tested using a.constructor === b.constructor

    if (!b.hasOwnProperty(p)) return false
    // allows to compare a[ p ] and b[ p ] when set to undefined

    if (a[ p ] === b[ p ]) continue
    // if they have the same strict value or identity then they are equal

    if (typeof (a[ p ]) !== 'object') return false
    // Numbers, Strings, Functions, Booleans must be strictly equal

    if (!compare(a[ p ], b[ p ])) return false
    // Objects and Arrays must be tested recursively
  }

  for (p in b) {
    if (b.hasOwnProperty(p) && !a.hasOwnProperty(p)) return false
    // allows a[ p ] to be set to undefined
  }
  return true
}
