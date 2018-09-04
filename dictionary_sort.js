const readline = require('readline');

function sort (array){

    for(var i = 0; i < array.length; i++){
        var min = i;
        for(var j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]){
                min = j
            }
        }
        temp = array[i];
        array[i] = array[min];
        array[min] = temp;
        
    }
  return array  
}

console.log(sort(['makan','duduk','tidur','terbang'])); 
console.log(sort(['anggi','angga','ani','adi'])); 


// module.exports = Dictionary
