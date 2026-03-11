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


    // Buton Dark / Light Mode
    
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Schimbăm textul butonului în funcție de temă
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.innerHTML = '<a>☀️ Light Mode</a>';
        } else {
            themeToggleBtn.innerHTML = '<a>🌙 Dark Mode</a>';
        }
    });
//afis/ascundere sect
    const sectionHeaders = document.querySelectorAll('main h2');

    sectionHeaders.forEach(h2 => {
        
        h2.innerHTML = '▼ ' + h2.innerHTML;

        h2.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            if (content) {
                content.classList.toggle('hidden');

                // schimbare ind
                if (content.classList.contains('hidden')) {
                    this.innerHTML = this.innerHTML.replace('▼', '▶');
                } else {
                    this.innerHTML = this.innerHTML.replace('▶', '▼');
                }
            }
        });
    });

  
    // Back to top"

    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            // Afis butonul doar daca s a scrollat peste 300px
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
});