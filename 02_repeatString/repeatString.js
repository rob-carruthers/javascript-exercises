const repeatString = function(string, nTimes) {

    if ( nTimes < 0 ) {
        return "ERROR"
    }
    
    output = "";

    for (let n = 0; n < nTimes; n++) {
        output += string;
    }

    return output;

};

// Do not edit below this line
module.exports = repeatString;
