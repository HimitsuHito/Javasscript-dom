function angkot(sopir,trayek,penumpang,kas) {
    this.sopir = sopir;
    this.trayek = trayek ; 
    this.penumpang = penumpang ;
    this.kas = kas ;

    this.penumpangNaik = function (namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
        } 
    this.penumpangTurun = function (namaPenumpang,bayar){
        if(this.penumpang.length === 0) {
            alert('angkot ini masih kosong');
            return false;
        }
        for( let i = 0 ; i < penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang ){
                this.penumpang == undefined;
                this.bayar += bayar ;
                return this.penumpang
            }
        }
    }    
}
let angkot1 = new angkot('ferry',['cileungsi - bogor'],[],0 );


