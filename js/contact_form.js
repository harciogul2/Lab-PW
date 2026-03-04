function submitForm() {

    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;

    console.log("Nume utilizator:", nume);
    console.log("Email utilizator:", email);
    console.log("Mesaj:", mesaj);

    // Validari
        if (nume.length < 2) {
            feedbackMsg.textContent = "Eroare: Numele trebuie să aibă cel puțin 2 caractere!";
            feedbackMsg.style.color = "red";
            return;
        }

        if (!email.includes('@')) {
            feedbackMsg.textContent = "Eroare: Adresa de email trebuie să conțină caracterul '@'!";
            feedbackMsg.style.color = "red";
            return;
        }

        if (mesaj.length < 10) {
            feedbackMsg.textContent = "Eroare: Mesajul trebuie să conțină cel puțin 10 caractere!";
            feedbackMsg.style.color = "red";
            return;
        }

        // totul ok
        feedbackMsg.textContent = `Mulțumim, ${nume}! Mesajul a fost trimis.`;
        feedbackMsg.style.color = "green";
        
    console.warn("Goodbye World!");
}