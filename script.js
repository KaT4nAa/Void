// script.js
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('passwordInput').value;
    const correctPassword = '400-560-740'; // Définir ici votre mot de passe
    
    if (password === correctPassword) {
        window.location.href = 'page-securisee.html'; // Redirige vers la page sécurisée
    } else {
        document.getElementById('error-message').textContent = 'Mot de passe incorrect.';
    }
});