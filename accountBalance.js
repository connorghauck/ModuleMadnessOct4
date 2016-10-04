// The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:
//
// The first function export should return the result of the first module being passed into the second module.
// The second function export should return the text “Account balance: \n”.


// you have to take in the randomNumber and usdValue files.
var randoNum = require('./randomNumber');
var usdVal = require('./usdValue');

//first, take the randoNum(100,1000000) and put it into the usdVal. this will take the function from the randomnumber file and put it as a parameter into the usdval function. aka it will create a random number from 100-1000000 and put it into the currency converter function.
exports.number = function(){
    return usdVal(randoNum(100, 1000000));
}
//this function will just say "account balance" and then add a new line below it.
exports.acctBal = function(){
    return ('Account balance: \n');
}
