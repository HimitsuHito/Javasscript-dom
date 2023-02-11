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