//const readline = require('readline');
// your code here to initialize the program and take user input
function dictionary_sort(arr) {
    return selectionSort(arr);
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var keyIndex = i;
        
        //get the smallest value from the next partition
        var indexToSwap = keyIndex + 1;
        for (let j = indexToSwap; j < arr.length; j++) {
            if (arr[j] < arr[indexToSwap]) {
                indexToSwap = j;
            }
        }
        
        var doSwap = arr[keyIndex] > arr[indexToSwap];

        if (doSwap) {
            var temp = arr[keyIndex];
            arr[keyIndex] = arr[indexToSwap];
            arr[indexToSwap] = temp;
        }
    }
    return arr;
}



console.log(dictionary_sort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionary_sort(['anggi', 'angga', 'ani', 'adi']));
//module.exports = Dictionary;
