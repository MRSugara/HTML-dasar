let nama = "Mochammad Robby Sugara"
var umur = 12
const alamat = "Malang"

let identitas = `nama saya ${nama}, umur saya ${umur}, saya sekaran tinggal di ${alamat}`
console.log(nama)
console.log(umur)
console.log(alamat)
console.log(identitas);

document.write(`<p>${nama}</p>`)
document.write(`<p>${umur}</p>`)
document.write(`<p>${alamat}</p>`)
document.write(`<p>${identitas}</p>`)

let sekolah = {
    nama : "SMAN 1 Lumajang",
    tahun: 2021,
    alamat:"Lumajang"
}
console.log(sekolah);
console.log(sekolah.alamat);
document.write(`<p>${sekolah.alamat}</p>`)


let angka = 10
let angka2 = 2
let penjumlahan = angka + angka2
console.log(penjumlahan)
console.log(typeof penjumlahan);
document.write(`<p>${penjumlahan}</p>`)
document.write(`<p>${typeof penjumlahan}</p>`)


let penjumlahanToString = String(penjumlahan)
console.log(penjumlahanToString)
console.log(typeof penjumlahanToString);
document.write(`<p>${penjumlahanToString}</p>`)
document.write(`<p>${typeof penjumlahanToString}</p>`)

for (let index = 0; index < 10; index++) {
    console.log(index)
document.write(`<p>${index}</p>`)

    if (index == 5) {
        break
    }
}
