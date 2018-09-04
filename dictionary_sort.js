// const readline = require('readline');
// // your code here to initialize the program and take user input

function dictionary(arrOfWord) {
    let output = ''
    for ( let i = 0; i < arrOfWord.length; i++) {
        let minIdx = i
        for ( let j = i+1; j < arrOfWord.length; j++ ) {
            if ( arrOfWord[j] < arrOfWord[minIdx] ) {
                minIdx = j;
            }
        }
        output = arrOfWord[i]
        arrOfWord[i] = arrOfWord[minIdx]
        arrOfWord[minIdx] = output
    }
    return arrOfWord.join(',')
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionary(arrOfWord))
// duduk,makan,terbang,tidur

function dictSort(arrOfWord) {
    let output = ''
    for ( let i = 0; i < arrOfWord.length; i++) {
        let minIdx = i
        for ( let j = i+1; j < arrOfWord.length; j++ ) {
            if ( arrOfWord[j] < arrOfWord[minIdx] ) {
                minIdx = j;
            }
        }
        output = arrOfWord[i]
        arrOfWord[i] = arrOfWord[minIdx]
        arrOfWord[minIdx] = output
    }
    return arrOfWord.join(',')
}


var arrOfWord = ['anggi', 'angga', 'ani', 'adi']
console.log(dictSort(arrOfWord))
// angga,anggi,adi,ani

// module.exports = Dictionary

