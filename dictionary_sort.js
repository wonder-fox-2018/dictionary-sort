const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arrOfWord){
    // console.log(arrOfWord)

    for(let i = 1; i <= arrOfWord.length-1; i++){
        for(let j = 0; j <= i - 1; j++){
            if(arrOfWord[i] < arrOfWord[j]){
                let sort = arrOfWord[i]
                arrOfWord[i] = arrOfWord[j]
                arrOfWord[j] = sort
            }
        }
    }

    return arrOfWord
}

let wordActivity = 'makan,duduk,tidur,terbang'.split(',')
let names = 'anggi, angga, ani, adi'.split(',')
console.log(dictionarySort(wordActivity))
console.log(dictionarySort(names))
// module.exports = Dictionary
