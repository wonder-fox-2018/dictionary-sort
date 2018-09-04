//const readline = require('readline');
// your code here to initialize the program and take user input
function dictionary_sort(arr) {
    return selectionSort(arr);
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var currIndex = i;

        //add (i + 1) to take into account the indexing of the initial array before slicing
        var nextSmallestIndex = findSmallestNumberIndex(arr.slice(currIndex + 1)) + (i + 1);
    
        if (arr[currIndex] > arr[nextSmallestIndex]) {
            //swap the index
            var temp = arr[currIndex];
            arr[currIndex] = arr[nextSmallestIndex];
            arr[nextSmallestIndex] = temp;
        }
    
    }
    return arr;
}

function findSmallestNumberIndex(arr) {
    var smallest = arr[0];
    var smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        var currNum = arr[i];
        if (currNum < smallest) {
            smallest = currNum;
            smallestIndex = i;
        }
        
    }
    
    return smallestIndex;
}

console.log(dictionary_sort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionary_sort(['anggi', 'angga', 'ani', 'adi']));
//module.exports = Dictionary;
