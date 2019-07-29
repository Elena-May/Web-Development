const reverseString = function(word) {
    
    let array = word.split(" ");
    let final = [];
    for (i = array.length; i--;) {

        let array2 = array[i].split("");
        let reversed = array2.reverse();
        let revString = reversed.join("");
        final.push(revString);
    }

    let finalfinal = final.join(" ");
    
    return finalfinal;

}




module.exports = reverseString
