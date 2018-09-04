const readline = require('readline');
function dictionarySort(arrOfWord){
    
    for (var i=0; i<arrOfWord.length-1; i++){
        var dataSekarang = arrOfWord[i]
        var nilaiMin = arrOfWord[i+1]
        var indexNilaiMin = i+1
        for (var j=i+1; j<arrOfWord.length; j++){
            if (arrOfWord[j]<nilaiMin){
                nilaiMin=arrOfWord[j]
                indexNilaiMin=j
            }
        }
        //swap data awal kalo lebih isi pada comparison
        if (nilaiMin<dataSekarang){
            arrOfWord[i]=nilaiMin
            arrOfWord[indexNilaiMin]=dataSekarang
        }
    }
    return arrOfWord.toString()
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))

module.exports = Dictionary