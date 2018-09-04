const readline = require('readline');

function dictionarySort(arr) {
   
    for (var i = 0; i < arr.length; i++) {
       
        var min = arr[i]
        var indexAcuan = i
        for (var j = i+1; j < arr.length; j++){
            if (min > arr[j]) {
                min = arr[j]
                var indexMin = j
                
            }
            
            //console.log(arr[j])
        }    
        if (arr[i] > min) {
            arr[indexMin] = arr[i];
            arr[i] = min
           
        }
        
    }
    return arr
}
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))

module.exports = dictionarySort
