// The second module should accept a number and convert it to a USD value. You can find some good implementations of this online.


//toLocaleString will take the parameter NUMBER, then substitute it into the return code to return the NUMBER in a locale based string currency form. this will add the $ to the beginning of it and the decimal onto the end of the integer.
//DONT FORGET TO RETURN IT. don't just put the code or it'll bring back nothing.

function local(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

module.exports = local;
