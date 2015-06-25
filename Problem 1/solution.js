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