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

    function reenviarOTP() {
        // Realizar la llamada a generar_Otp.php para reenviar el OTP
        fetch('generar_Otp.php')
        .then(response => {
            if (response.ok) {
                alert('El OTP ha sido reenviado a tu correo.');
            } else {
                alert('Hubo un problema al reenviar el OTP. Intenta nuevamente.');
            }
        })
        .catch(error => {
            console.error('Error al reenviar el OTP:', error);
        });
    }
});
