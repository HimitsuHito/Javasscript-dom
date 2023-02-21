// memanipulasi array

// menambahkan isi array

let arr = [];
arr [1] = 'orang';
arr [2] = 'manusia';
arr [3] = 'human';

console.log(arr[3]);

// menghapus isi dalam array
let arr2 = ['ferry','wilana','kabur'];
arr2[2] = undefined;
console.log(arr2);


// 3. Menampilkan isi array menggunakan looping
let arr3 = ['ferry','wilanas','orang'];

for(i = 0 ; i < arr3.length ; i++){
    console.log(arr3[i]);
} 

// menggunakan method pada array
// 1. join
// berfungsi untuk merubah menjadi string dan pemisah pada array
var arr4 =  ['ferry','wilanass','orang'];
console.log(arr4.join(' - '));


// 2. Push & pop
// push berfungsi untuk menambahkan pada sebuah akhir pada array
// pop berfungsi untuk menghapus akhir pada array
arr4.push('human');
console.log(arr4.join(' - '));
arr4.pop()
console.log(arr4.join(' - '));

// 3 .unshift & shift 
// unshift berfungsi menambahkan array pada awal
// shift menghapus diawal array
arr4.unshift('orang')
console.log(arr4.join(' - '));
arr4.shift();
console.log(arr4.join(' - '));

// var arr4 =  ['ferry','wilanass','orang'];
// 4. slice & splice 
// splice (Indexawal, mau di hapus berapa, ElementBaru1, ElementBaru2,....)

arr4.splice(2,0,'humanity','wiliam','permen');
console.log(arr4.join(' - '));

// slice(awal,akhir);
// index awalnya terbawa dan index akhir dikurangin satu
// selalu menghasilkan array baru jadi harus membuat tampungannya terlebih dahulu

let arr5 =  ['ferry','wilanass','orang','kemduian','selalu'];
let arr6 = arr5.slice(1,3)
console.log(arr6.join(' - '));