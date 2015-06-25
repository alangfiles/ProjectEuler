//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
//Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindromFinder(){

    var largestPalindrome = 0;
    var constituents = [];
    for(var firstNum = 999; firstNum > 0; firstNum--){
        for(var secondNum = 999; secondNum > 0; secondNum--){
            var sum = firstNum*secondNum;
            if(sum.toString() == sum.toString().split("").reverse().join("")){
                if(sum > largestPalindrome){
                    largestPalindrome = sum;
                    constituents = [firstNum, secondNum];
                }
            }
        }
    }

    return constituents;
}
