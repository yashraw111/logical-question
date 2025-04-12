function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible by any number other than 1 and itself
        }
    }

    return true;
}

console.log(isPrime(7));  
console.log(isPrime(10)); 
