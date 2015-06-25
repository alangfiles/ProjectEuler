//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?


function findLargestPrimeFactor(number){

//find all the primes between 0 and sqrt(number) (600851475143 by default)
// we can use sqrt(number) since we don't care about the highest prime
// we just care about the highest factor
//starting at the end of the list (aka, starting with large primes) see if any of them divide the number inputed evenly.
//if so, bob's your uncle.
    number = (number == undefined ? 600851475143 : number);
    // sieve of Eratosthenes
    var sievedPrimes = [];
    var largestPrimeFactor = i;
    for(var i = 2; i < Math.sqrt(number); i++){
        if(sievedPrimes[i] == undefined ){
            for(var degree=1, j = i << 1; j < Math.sqrt(number); j = (i << 1)+(++degree*i)){//we only care about primes < sqrt which greatly limits the search
                sievedPrimes[j] = false;
            }
            if(number%i == 0){
                largestPrimeFactor = i;
            }
        }
    }
    return largestPrimeFactor;
}
