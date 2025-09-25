// navbar.js
document.addEventListener('DOMContentLoaded', () => {
    // Hent navbar fra navbar.html og indsæt den i #navbar-container
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;

            // Tilføj funktionalitet til menu-toggle
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        })
        .catch(err => console.error('Fejl ved indlæsning af navbar:', err));
});
