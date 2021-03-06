//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function evenFibonacciAdder(limit){
    limit = (limit == undefined ? 4000000 : limit);
    var evenSum = 0;
    var currentFibonacciNumber = 2, previousFibonacciNumber = 1;
    evenSum += currentFibonacciNumber; //hard coded before the while.

    while(currentFibonacciNumber < limit){
        //let's do some weird juggling to get the next numbers ;)
        currentFibonacciNumber = previousFibonacciNumber+currentFibonacciNumber;
        previousFibonacciNumber = currentFibonacciNumber-previousFibonacciNumber;

        if(currentFibonacciNumber %2 == 0){
            evenSum += currentFibonacciNumber;
        }

    }

    return evenSum;
}
