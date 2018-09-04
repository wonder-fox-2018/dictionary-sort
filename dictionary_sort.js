const readline = require('readline');

function selectionSort(data) {
	for (var i = 0; i < data.length-1; i++) {
		var temp = data[i];
		var min = data[i];
		var index_min;

		for (var j = i+1; j < data.length; j++) {
			if (data[j] < min) {
				min = data[j];
				index_min = j;
			}
		}

		if (min < temp) {
			data[i] = min;
			data[index_min] = temp;
		}
	}

	return data;
}

function dictionarySort(array_data) {
	var array_sorted = selectionSort(array_data).join(', ');

	return array_sorted;
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang'])); // duduk, makan, terbang, tidur
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi'])); // adi, angga, anggi, ani