function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
console.log([4, 5, 8, 11, 12].find(isPrime)); // even with 11, only returns 5 -- returns as soon as finds first
console.log([4, 8, 11, 12].find(isPrime)); // 11
