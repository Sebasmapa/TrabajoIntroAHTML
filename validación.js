document.addEventListener('DOMContentLoaded', function() {
    // Formulario de Login
    var loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            
            if (username === 'admin' && password === '1234') {
                window.location.href = 'dashboard.html';
            } else {
                alert('Credenciales incorrectas');
            }
        });
    });