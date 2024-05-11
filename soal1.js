// soal1.js

// Import module shapes.js
const shapes = require('./shapes');

// Contoh penggunaan untuk persegi
const sisiPersegi = 5;
console.log(`Luas persegi dengan sisi ${sisiPersegi}: ${shapes.luasPersegi(sisiPersegi)}`);
console.log(`Keliling persegi dengan sisi ${sisiPersegi}: ${shapes.kelilingPersegi(sisiPersegi)}`);

// Contoh penggunaan untuk persegi panjang
const panjangPersegiPanjang = 7;
const lebarPersegiPanjang = 4;
console.log(`Luas persegi panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${shapes.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
console.log(`Keliling persegi panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${shapes.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
