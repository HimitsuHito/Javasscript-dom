let noAngkot = 1 ;
let jumlahAngkot = 10 ;
let angkotBeroperasi = 6 ;

for ( noAngkot = 1 ; noAngkot <= jumlahAngkot ; noAngkot++ ) {
    if(noAngkot <= angkotBeroperasi && noAngkot !== 1 ) {
        console.log('No Angkot ' + noAngkot + ' beroperasi dengan baik');
    }else if (noAngkot === 7 || noAngkot === 10 || noAngkot === 1){
        console.log('No Angkot ' + noAngkot + ' Sedang lembur')
    }
    
    
    else {
        console.log('No Angkot ' + noAngkot + ' Tidak beroperasi')
    }
}