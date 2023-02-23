// jumlah orang
let penumpang = [];
let tambahPenumpang = function(namaPenumpang,penumpang ){ 
    // jika angkot kosong
    if(penumpang.length == 0 ){
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikasan isi array & keluar dari function
    return penumpang ;    
}else {
    
    // telusuri seluruh kursi dari awal
        for( let i = 0 ; i < penumpang.length; i++){       
         // jika ada kursi kosong 
        if(penumpang[i] == undefined ){
            // tambah penumpang di kursi tersebut
            penumpang[i] = namaPenumpang ;
            namaPenumpang != namaPenumpang 
            // kembalikan isi array & keluar dari function
            return penumpang;

        // jika sudah ada nama yang sama
        }else if(penumpang[i] == namaPenumpang ){
            //tampilan pesan kesalahannya
            console.log(namaPenumpang + ' sudah ada di dalam angkot');
            // kembalikan isi array & keluar dari function
            return penumpang;

         // jika seluruh kursi terisi
        }else if(i == penumpang.length - 1 ){ 
            // tambah penumpang di akhir array
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang;
            }
        }
    }
}
let hapusPenumpang = function(namaPenumpang,penumpang){
// Penumpang kosong
    if( penumpang.length == 0 ){
        console.log('Angkot masih kosong');
    }else{ 
        for(let i = 0 ; i < penumpang.length ; i++){
            if(penumpang[i] == namaPenumpang ){
                penumpang[i] = undefined;
            }else if( i == penumpang.length - i ){
                console.log(namaPenumpang + 'tidak ada di dalam angkot');
                return penumpang;
            } 
        }
    }
    return penumpang;
}







