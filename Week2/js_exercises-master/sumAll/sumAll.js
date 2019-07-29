const sumAll = function(number1, number2) {
    let finalSum = 0;

    if (typeof number1 !== 'number' || typeof number2 !== 'number' || Math.sign(number1) === -1 || Math.sign(number2) === -1) {
        return 'ERROR';
    } else {

    if (number1 < number2) {
        for (i = number1; i <= number2; i++) {
            finalSum += i;}

    } else if (number1 > number2) {

        for (i = number2; i <= number1; i++) {
            finalSum += i;}
    }
    return finalSum;
    }
}

module.exports = sumAll
