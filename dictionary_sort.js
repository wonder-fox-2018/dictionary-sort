const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr){
    for (let i = 0; i < arr.length-1; i++){
        let small = arr[i]
        let idx = i
        for(let j = i+1; j < arr.length; j++){
            if (arr[j] < small){
                small = arr[j]
                idx = j
            }
        }
        let temp = arr[i]
        arr[i] = small
        arr[idx] = temp
    }
    return arr
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'] 
var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi']

console.log(dictionarySort(arrOfWord));
console.log(dictionarySort(arrOfWord2));

// module.exports = Dictionary
