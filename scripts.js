document.addEventListener('DOMContentLoaded', function() {
   
    // Formulario de Login
    var loginForm = document.getElementById('loginForm');
    if (loginForm){
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
    }
        // Formulario de Registro
    var registroForm = document.getElementById('registroForm');
    if (registroForm) {
        registroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var newUser = document.getElementById('newUser').value;
            var newPassword = document.getElementById('newPassword').value;
            
            alert('Usuario registrado: ' + newUser);
            window.location.href = 'index.html';
        });
    }
    });

