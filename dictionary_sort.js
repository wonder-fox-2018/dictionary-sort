const readline = require('readline');


function dictionary(arr) {
    for (let i = 0; i < arr.length; i++) {
        var temp;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

//Driver code
console.log(dictionary(['makan','duduk','tidur','terbang']))
console.log(dictionary(['anggi','angga','ani','adi']))



// module.exports = Dictionary
