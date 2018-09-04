const readline = require('readline');
// your code here to initialize the program and take user input

// function Dictionary(arr){
//
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       var string = arr[i]
//       // console.log(arr[i], arr[j])
//       if (arr[i] < arr[j]) {
//         arr[i] = arr[j]
//         arr[j] = string
//       }
//     }
//   }
//   var hasil_sementara = ""
//   for (var i = 0; i < arr.length; i++) {
//     hasil_sementara += arr[i] +","
//   }
//   var hasil = ""
//   for (var i = 0; i < hasil_sementara.length-1; i++) {
//     hasil += hasil_sementara[i]
//   }
//   // console.log(hasil)
//   return hasil
// }

function Dictionary(arr){

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      var string = arr[i]
      if (arr[i] < arr[j]) {
        arr[i] = arr[j]
        arr[j] = string
      }
    }
  }
  var hasil = arr.join(",")
  return hasil
}
console.log(Dictionary(["makan", "duduk", "tidur", "terbang"])); // duduk,makan,terbang,tidur
console.log(Dictionary(["anggi", "angga", "ani", "adi"])); // adi,angga,anggi,ani


module.exports = Dictionary
