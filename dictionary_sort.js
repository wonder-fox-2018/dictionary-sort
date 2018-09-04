const readline = require('readline');

function DictionarySort(arr){
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i]
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<=tmp){
                tmp = arr[j]
                arr[j] = arr[i]
                arr[i] = tmp
            }
        }   
    }
    return arr
}

console.log(DictionarySort([
    'makan','duduk','tidur','terbang'
]))

console.log(DictionarySort([
    'anggi','angga','ani','adi'
]))





// module.exports = Dictionary
