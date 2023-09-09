let nama = "Mochammad Robby Sugara"
var umur = 12
const alamat = "Malang"

let identitas = `nama saya ${nama}, umur saya ${umur}, saya sekaran tinggal di ${alamat}`
console.log(nama)
console.log(umur)
console.log(alamat)
console.log(identitas);

let sekolah = {
    nama : "SMAN 1 Lumajang",
    tahun: 2021,
    alamat:"Lumajang"
}
console.log(sekolah);
console.log(sekolah.alamat);

let angka = 10
let angka2 = 2
let penjumlahan = angka + angka2
console.log(penjumlahan)
console.log(typeof penjumlahan);

let penjumlahanToString = String(penjumlahan)
console.log(penjumlahanToString)
console.log(typeof penjumlahanToString);

for (let index = 0; index < 10; index++) {
    console.log(index)
    if (index == 5) {
        break
    }
}
