/*
A prime number is a whole number greater than 1 and has no divisors other than 1 and itself.

Write a function that given a number argument, returns all the primes between 1 and that number.

For example, given 12, the function should return [2,3,5,7,11].
*/

/* Other solution */

/*
function computePrimes(n) {
  let primes = Array.from({length: n + 1}, (c, i) => i >= 2 ? i : false);

  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      for (let j = i * 2; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes.filter(x => x);
}
*/



function computePrimes(n) {
  let primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}