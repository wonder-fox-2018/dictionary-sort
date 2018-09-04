function dictionarysort(arr){

    for (var i = 0; i < arr.length; i++) {
        acuan1 = arr[i];
        acuan2=arr[i+1];
        i_acuan2=i+1;    
        for (var j = i_acuan2 + 1; j < arr.length; j++) {
            if(arr[j]<acuan2){
                acuan2=arr[j];
                i_acuan2=j;
            } 
        }
        if(acuan2<acuan1){
            arr[i]=acuan2;
            arr[i_acuan2]=acuan1;
        }
        
    }
    return arr;
}

console.log(dictionarysort(['makan','duduk','tidur','terbang']));
console.log(dictionarysort(['anggi','angga','ani','adi']));

