document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const angkaPertama = parseFloat(document.getElementById("angkaPertama").value);
    const operator = document.getElementById("operator").value;
    const angkaKedua = parseFloat(document.getElementById("angkaKedua").value);
    
    let hasil;
    
    if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
        hasil = "Inputan tidak sesuai!";
    } else {
        switch (operator) {
            case "+":
                hasil = angkaPertama + angkaKedua;
                break;
            case "-":
                hasil = angkaPertama - angkaKedua;
                break;
            case "*":
                hasil = angkaPertama * angkaKedua;
                break;
            case "/":
                hasil = angkaKedua !== 0 ? angkaPertama / angkaKedua : "Tidak bisa dibagi dengan nol";
                break;
            case "%":
                hasil = angkaPertama % angkaKedua;
                break;
            default:
                hasil = "Operator tidak dikenal";
        }
    }
    
    document.getElementById("hasil").innerText = `Hasil: ${hasil}`;
});
