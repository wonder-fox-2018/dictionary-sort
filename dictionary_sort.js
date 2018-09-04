const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr) {
    for (var i=0; i<arr.length; i++) {
        
        // CARI MIN:
        var min = arr[i];
        var tempIndex = i;
        for (var j=i+1; j<arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                tempIndex = j;
            }
        }

        // TUKAR POSISI:
        if (min < arr[i]) {
            var tempDepan = arr[i];
            arr[tempIndex] = tempDepan;
            arr[i] = min;
        }
    }
    return arr;
}


// TESTCASE:
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));



// module.exports = Dictionary

// function selectionSort(arr) {
//     for (var i=0; i<arr.length-1; i++) {

//         // PENENTUAN MIN: 
//         var min = arr[i];
//         var tempIndex = i;
//         for (var j=i+1; j<arr.length; j++) { // 1-5
//             // console.log(arr[j]);
//             if (arr[j] < min) { // j: 1, arr[j]: 2, min: 2
//                 min = arr[j];
//                 tempIndex = j;
//             }
//         }
//         console.log(min, tempIndex);
        

        // TUKAR POSISI:
    //     if (min < arr[i]) {
    //         var tempDepan = arr[i];
    //         arr[tempIndex] = tempDepan;
    //         arr[i] = min;
    //     }
    // }
    
    // return arr;
// }