let noAngkot = 1 ;
let jmlAngkot = 10;
let AngkotBeroperasi = 6 ;

for(noAngkot = noAngkot ; noAngkot <= jmlAngkot ; noAngkot++){
    if(noAngkot <= AngkotBeroperasi && noAngkot !== 5) {
        console.log('no.' + noAngkot + ' Beroperasi dengan baik');
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log('no. ' + noAngkot + ' sedang lembur')
    } 
    
    else {
        console.log('no. '+ noAngkot +' tidak beroperasi');

    }
}