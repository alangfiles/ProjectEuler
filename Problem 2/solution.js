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