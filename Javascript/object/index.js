function angkot(sopir,trayek,penumpang,kas) {
    this.sopir = sopir;
    this.trayek = trayek ; 
    this.penumpang = penumpang ;
    this.kas = kas ;

    this.penumpangNaik = function (namaPenumpang,penumpang){
        if(this.penumpang == 0 ){
        // jika penumpang kosong isi penumpang tersebut
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
        // cek apakah kursi kosong atau tidak    
        }else{
        for (let i = 0 ; i < this.penumpang.length; i++){
                if( this.penumpang[i] == undefined ) {
                    this.penumpang[i] = namaPenumpang;
                    namaPenumpang != namaPenumpang; 
                    return this.penumpang;
                // jika penumpang ada yang sama
                } else if (this.penumpang[i] == namaPenumpang){
                    console.log('penumpang sudah ada didalam kendaraaan');
                    return this.penumpang;
                // jika kursi sudah penuh dorong ke dalam penumpang yang baru
                } else if(i == this.penumpang.length - 1 ){
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                } 
            }
        } 
    } 
    this.penumpangTurun = function (namaPenumpang,bayar){
        if(this.penumpang.length == 0) {
            alert('angkot ini masih kosong');
            return false;
        }else 
        for( let i = 0 ; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang ){
                this.penumpang[i] = undefined;
                this.kas += bayar ;
                return this.penumpang
            } else if(i == this.penumpang.length - 1 ){
                console.log(namaPenumpang + 'penumpang ini sudah tidak ada');
                return this.penumpang;
            } 
        }
    }

}
let angkot1 = new angkot('ferry',['cileungsi - bogor'],[],0 );


