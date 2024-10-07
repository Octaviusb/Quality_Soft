<?php
session_start();

// Función para generar OTP
function generarOTP($longitud = 6) {
    $caracteres = '0123456789';
    $otp = '';
    for ($i = 0; $i < $longitud; $i++) {
        $otp .= $caracteres[rand(0, strlen($caracteres) - 1)];
    }
    return $otp;
}

// Si no hay OTP en sesión o si el usuario pide reenviar
if (!isset($_SESSION['otp']) || isset($_GET['reenviar'])) {
    $otp = generarOTP();
    $_SESSION['otp'] = $otp;

    // Aquí envías el OTP de nuevo al usuario
    $destinatario = "correo_del_usuario@example.com";
    $asunto = "Tu Código OTP de Verificación";
    $mensaje = "Tu código OTP es: " . $otp;
    $encabezados = "From: no-reply@yourdomain.com\r\n";

    mail($destinatario, $asunto, $mensaje, $encabezados);
    echo "OTP reenviado.";
}
?>
