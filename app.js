document.getElementById('registerForm').addEventListener('submit', function(event) {
    const usuario = document.getElementById('usuario').value.trim();
    const email = document.getElementById('email').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const confirmarContrasena = document.getElementById('confirmarContrasena').value.trim();

    if (usuario === '' || email === '' || contrasena === '' || confirmarContrasena === '') {
        alert('Por favor complete todos los campos.');
        event.preventDefault(); 
    } else if (contrasena !== confirmarContrasena) {
        alert('Las contraseñas no coinciden.');
        event.preventDefault();
    } else {
        
    }
});
