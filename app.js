//Finally, in the app.js file use the functions from your third module to produce the following output in the console:

//you have to take in .randomnumber, .usdvalue, and .accountbalance.
var http = require('http');
var randoNum = require('./randomNumber');
var usdVal = require('./usdValue');
var accountBal = require('./accountBalance');

//don't forget to do res.writehead(200)


//you're going to write the account balance\n line first so you can put the number below it.
//accountBal.acctBal() is what you write because that's the FUNCTION inside of the FILE.
//then you want the converted number function, which is called number.
//for that you will do accountBal.number() because that's the FUNCTION inside of the FILE, once again.
http.createServer(function(req, res){
    res.writeHead(200);
    res.write(accountBal.acctBal());
    res.write(accountBal.number());
    res.end();
}).listen(5000);
