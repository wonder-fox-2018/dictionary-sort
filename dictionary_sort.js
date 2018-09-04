const readline = require('readline');
function Dictionary(data){
    for (var i = 0; i < data.length - 1; i++){
        
        var dataSekarang = data[i];
        var nilaiMin = data[i+1];
        var indexNilaiMin = i+1;
        for (var j = i + 1; j < data.length; j++){
            if (data[j] < nilaiMin){
                nilaiMin = data[j];
                indexNilaiMin = j;
            }
        }

        if (nilaiMin < dataSekarang){
            data[i] = nilaiMin;
            data[indexNilaiMin] = dataSekarang;
        }
        
    }

    return data.toString();
}
console.log(Dictionary(['makan','duduk','tidur','terbang'])) // duduk, makan, tidur, terbang
console.log(Dictionary(['anggi','angga','ani','adi'])) // angga, anggi, ani, adi

module.exports = Dictionary