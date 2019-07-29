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

console.log( '1: ' + sumAll(1, 4));
console.log( '2: ' + sumAll(1, 4000));
console.log('3: ' + sumAll(123, 1));
console.log('4: ' + sumAll(-10, 4));
console.log('5: ' + sumAll(10, "90"));
console.log('6: ' + sumAll(10, [90, 1]));