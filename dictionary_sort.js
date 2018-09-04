const readline = require('readline');

function sortDictionary (word) {
    for (let i = 0; i < word.length-1; i++) {
        let small = word[i]
        let index = i
        for (let j = i + 1; j < word.length; j++) {
            if (word[j] < small) {
                small = word[j]
                index = j
            }
        }
        let temp = word[i] 
        word[i] =  small 
        word[index] = temp
        
    }
    return word
}


console.log(sortDictionary(['makan','duduk','tidur','terbang']));
console.log(sortDictionary(['anggi','angga','ani','adi']));





//module.exports = Dictionary
