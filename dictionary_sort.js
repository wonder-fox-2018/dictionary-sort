const readline = require('readline');
// your code here to initialize the program and take user input
function dictSort(arr) {
  // let unsorted,j;

  // for (let i = 1; i <= arr.length; i++) {
  //   unsorted = arr[i]
  //   j = i-1

  //   while (j>=0 && unsorted < arr[j]) {
  //     arr[j+1] = arr[j]
  //     j -= 1
  //     arr[j+1] = unsorted
  //   }
  // }
  // return arr

  /*----------- Bubble Sort --------------*/
  // let temp;
  // do {
  //   swapped = false
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i-1] > arr[i]) {
  //       temp = arr[i-1]
  //       arr[i-1] = arr[i]
  //       arr[i] = temp
  //       swapped = true
  //     }
  //   }
  // } while (swapped);

  // return arr

  /*----------- Quick Sort --------------*/
  //base case
  if (arr.length <= 1) { 
		return arr;
	} else {

		var left = [];
		var right = [];
		var newArr = [];
		var pivot = arr.pop();

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] <= pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}

		return newArr.concat(dictSort(left), pivot, dictSort(right));
	}
}

let arrOfWord1 = ['makan','duduk','tidur','terbang']
//[ 'duduk', 'makan', 'terbang', 'tidur' ]
let arrOfWord2 = ['anggi','angga','ani','adi']
//[ 'adi', 'angga', 'anggi', 'ani' ]

console.log(dictSort(arrOfWord1));
console.log(dictSort(arrOfWord2));

// module.exports = Dictionary
