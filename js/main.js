document.addEventListener("DOMContentLoaded", () => {

   
    // Validare Formular Contact
    const form = document.getElementById('contactForm');
    const feedbackMsg = document.getElementById('formFeedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Opreste reincarcarea paginii

        const nume = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mesaj = document.getElementById('message').value.trim();

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
        
        //golim formularul dupa trimitere cu succes
        form.reset();
    });


   
});