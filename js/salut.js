
function seteazaSalut() {
    const ora = new Date().getHours();
    let mesaj = "";
    const elementSalut = document.getElementById("salut");

    if (ora >= 6 && ora < 12) {
        mesaj = "Buna dimineața! Bine ai venit pe pagina mea.";
    } else if (ora >= 12 && ora < 18) {
        mesaj = "Buna ziua! Bine ai venit pe pagina mea.";
    } else {
        mesaj = "Bunas seara! Bine ai venit pe pagina mea.";
    }
    if (elementSalut) {
        elementSalut.innerText = mesaj;
    }
}

seteazaSalut();