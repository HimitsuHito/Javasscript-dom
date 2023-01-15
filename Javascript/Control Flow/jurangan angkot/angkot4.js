let noAngkot = 1 ; 
let jmlAngkot = 10 ;
let AngkotBeroperasi = 6
let AngkotLembur = 8 ;

for(noAngkot = noAngkot; noAngkot <=jmlAngkot; noAngkot++ ) {
    if(noAngkot <= AngkotBeroperasi) {
        console.log('Angkot No.'+ noAngkot +' beroperasi dengan baik');
    }
    else if(noAngkot == AngkotLembur) {
        console.log('Angkot No. ' +noAngkot +' sedang lembur');
    }
    
    
    else {
        console.log('Angkot No.'+ noAngkot +' beroperasi dengan tidak baik');
    }
}

