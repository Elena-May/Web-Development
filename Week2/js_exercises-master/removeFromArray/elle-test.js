const removeFromArray = function(array, ...arguments) {
    for (i = 0; i < arguments.length; i++) {
        for (j = 0; j < array.length; j++) {
           if (arguments[i] === array[j]) {
            let item = array[j]
            let index = array.indexOf(item);
            array.splice(index, 1);
            }       
        }
    }

    return array;
}

console.log(removeFromArray([1,2,3,4], 1, 'elephant', 4));