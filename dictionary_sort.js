const readline = require('readline');
// your code here to initialize the program and take user input
function dictSort(arr) {
  let unsorted,j;

  for (let i = 1; i <= arr.length; i++) {
    unsorted = arr[i]
    j = i-1

    while (j>=0 && unsorted < arr[j]) {
      arr[j+1] = arr[j]
      j -= 1
      arr[j+1] = unsorted
    }
  }
  return arr
}
let arrOfWord1 = ['makan','duduk','tidur','terbang']
let arrOfWord2 = ['anggi','angga','ani','adi']

console.log(dictSort(arrOfWord1));
console.log(dictSort(arrOfWord2));

module.exports = Dictionary
