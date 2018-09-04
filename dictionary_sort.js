const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(data){
    var newData=data.slice(0);
    for(var i=0;i<newData.length-1;i++){
        var currentData=newData[i]
        var maks=newData[i+1]
        var indexMaks=i+1
        for(var j=i+1;j<newData.length;j++){
            if(newData[j]<maks){
                maks=newData[j]
                indexMaks=j
            }
        }
        if(maks<currentData){
            newData[i]=maks
            newData[indexMaks]=currentData
        }
    }
    return newData.join()
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))
module.exports = Dictionary
