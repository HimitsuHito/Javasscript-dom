// dom selection 
//document.getElementById() -> mengembalikan satu nilai
// element
const judul = document.getElementById('judul');
judul.style.color ='blue';
judul.style.backgroundColor = 'gray';


// Hanya element yang bisa dirubah .  

// document.getElementByTagName() 
// -> HTML Collection 
// mengembalikan nilai array

const p = document.getElementsByTagName('p');
for (let i = 0 ; i < p.length; i++ ){
    p[i].style.backgroundColor = 'violet';
};
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '100px';


// document.getElementsByClassName()
// -> HTML Collection

const p1 = document.getElementsByClassName('p1')[0]
p1.style.backgroundColor = 'grey';
