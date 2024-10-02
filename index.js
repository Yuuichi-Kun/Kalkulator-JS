const readline = require("readline-sync");

const angkaPertama = parseFloat(readline.question("Masukkan Angka Pertama: "));
const operator = readline.question("Masukkan operator (+, -, *, /, %): ");
const angkaKedua = parseFloat(readline.question("Masukkan Angka Kedua: "));

// Periksa apakah input adalah angka
if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
    console.log("Inputan tidak sesuai!!!"); // Hapus 'return' karena tidak berada dalam fungsi
} else {
    const Hasil = execute(angkaPertama, angkaKedua, operator);
    console.log(`hasilnya adalah ${Hasil}`); // Gunakan backticks (``) untuk template literals
}

// Fungsi untuk melakukan operasi
function execute(angkaPertama, angkaKedua, operator) {
    let Hasil; // Deklarasikan variabel Hasil
    switch (operator) {
        case "+":
            Hasil = angkaPertama + angkaKedua;
            break;
        case "-":
            Hasil = angkaPertama - angkaKedua;
            break;
        case "*":
            Hasil = angkaPertama * angkaKedua;
            break;
        case "/":
            if (angkaKedua !== 0) {
                Hasil = angkaPertama / angkaKedua;
            } else {
                Hasil = "Tidak bisa dibagi dengan nol";
            }
            break;
        case "%":
            Hasil = angkaPertama % angkaKedua;
            break;
        default:
            Hasil = "Operator tidak dikenal";
    }
    return Hasil; // Kembalikan nilai Hasil
}
