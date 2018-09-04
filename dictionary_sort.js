function arrOfWord(arr){
    for ( var i = 0 ; i < arr.length ; i ++){
        min = i

        for ( var j = i+1 ; j < arr.length ; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }

    return arr.join()
}

console.log(arrOfWord(['makan','duduk','tidur','terbang'])) // duduk,makan,terbang,tidur
console.log(arrOfWord(['anggi','angga','ani','adi'])) //adi,angga,anggi,ani