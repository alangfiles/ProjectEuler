//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
//Find the sum of all the multiples of 3 or 5 below 1000.

function findMultiplesOfThreeAndFive(limit){
    var multiples = [];
    for(var i = 0; i < limit; i++){
        if((i%3==0 || i%5==0) && multiples.indexOf(i)== -1){
            multiples.push(i);
        }
    }

//    var sum = 0;
//    for(var i=0; i < multiples.length; i++){
//        sum += multiples[i];
//    }

    var sum = multiples.reduce(function(previous, current, index, array){
        return previous + current;
    });

    return sum;
}
