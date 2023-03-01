
let penumpang = [];

let tambahPenumpang = function(namaPenumpang,penumpang){
    if (penumpang == 0 ){
        penumpang.push(namaPenumpang);
        return penumpang;
    }else{
       for( let i = 0 ; i < penumpang.length ; i++){
            // cek apakah kursi tersebut kosong atau tidak
            // jika kosong 
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang ;
                penumpang[i] != namaPenumpang ;
                return penumpang ;
            // jika penumpang orang dengan nama yang sama
            }else if(penumpang[i] == namaPenumpang ){
                console.log('penumpang sudah ada ');
                return penumpang ;
            // jika penumpang masih kosong dorong ke kursi sebelahnya    
            }else if ( i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
       }
    }
}
let hapusPenumpang = function(namaPenumpang,penumpang){
    if (penumpang == 0 ){
        console.log('belom ada penumpang ');
    }else {
        for(let i = 0 ; i < penumpang.length ; i++){
            if(penumpang[i] == namaPenumpang ){
                penumpang[i] == undefined 
            }else if(penumpang[i] == penumpang.length - 1){
                console.log('penumpang tidak ada');
            }
        }
    }
    return penumpang
}