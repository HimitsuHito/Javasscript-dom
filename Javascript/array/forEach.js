let angka = [ 1,2,4,6,8,9];
let nama = ['ferry','wilana','wilana']
// for (i = 0 ;i < angka.length ; i++){
//     console.log(angka[i]);
// }

// 6.forEach
// forEach hanya bisa digunakan untuk looping pada array
// dengan menggunakan forEach maka fungsinya akan sama

// angka.forEach(function(e){
//     console.log(e)
// });

// mengabungkan 2 variabel bisa menggunakan 2 fungsional
nama.forEach(function(e,i){
    console.log('Mahasiswa ke -' + (i+1) + ' adalah '+ e);
});


// 7.map
// map menghasilkan aray baru;
// jika map dibawah diganti forEach maka fungsinya tidak berjalan
let angka2 = angka.map(function(e) {
    return e * 2 ;
}) ;
console.log(angka2.join(' - '));


// 8. sort 
// jika hanya seperti yang dibawah maka angka nya tidak berurututan
let angka3 = [ 1,2,4,10,6,20,8,9,5];
angka.sort();
console.log(angka3.join(' - '));

// berurutan bisa dengan menggunakan function dibawah ini
angka3.sort(function(a,b){
    return a-b ;
})

console.log(angka3.join(' - '));
