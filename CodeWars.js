// Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct.
// However, since someone could look over your shoulder, you don't want that shown on your screen.
// Instead, we mask it.
//
//     Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    }
    for (i = 0; i < cc.length - 4; i++) {
        cc = cc.substring(0, i) + "#" + cc.substring(i + 1);
    }
    return cc;
}

(function testMaskify() {
    console.log(maskify('4556364607935616'));
    console.log(maskify('1'));
    console.log(maskify('11111'));
    console.log(maskify('5423'));
    console.log(maskify('12222'));
})();


// In this kata you are required to, given a string,
// replace every letter with its position in the alphabet.
//
//     If anything in the text isn't a letter, ignore it and don't return it.
//
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    text = text.toUpperCase();

    length = text.length;
    newtext = "";

    for (i = 0; i < length; i++) {
        asciiCode = text.charCodeAt(i);
        if (asciiCode >= 65 && asciiCode <= 90) {
            newtext = newtext + (asciiCode - 64) + " ";
        }
    }
    return newtext.substring(0, newtext.length - 1);
}


// will raise an error if there is an error.
(function alphabetPositionTest() {
    var assert = require('assert');
    console.log(alphabetPosition("7ap*<-#)"));
    assert.equal(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11", "ERROR!")
    assert.equal(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20", "ERROR!")
})();

//
//
// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
//
//     The binary number returned should be a string.
//

function addBinary(a, b) {
    result = a + b;
    return result.toString(2);
}

(function addBinaryTest() {
    console.log(addBinary(1, 2));
})();

//
// You might know some pretty large perfect squares. But what about the NEXT one?
//
//     Complete the findNextSquare method that finds the next integral perfect
//     square after the one passed as a parameter. Recall that an integral
//     perfect square is an integer n such that sqrt(n) is also an integer.
//
//     If the parameter is itself not a perfect square then -1 should be returned.
//     You may assume the parameter is non-negative.

function findNextSquare(sq) {
    sqrtval = Math.sqrt(sq);
    if (sqrtval === Math.floor(sqrtval)) {
        return Math.pow(sqrtval + 1, 2);
    }
    // Return the next square if sq is a perfect square, -1 otherwise
    else {
        return -1;
    }
}

(function findNextSquareTest() {
    console.log(findNextSquare(42));
})();


// thought about it and wondered
(function testconcat() {
    console.log("1" + "1");
})();
