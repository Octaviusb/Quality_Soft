<?php
session_start();

// Verificar si el OTP es correcto
if (isset($_POST['otp'])) {
    $otpIngresado = $_POST['otp'];
    if ($otpIngresado == $_SESSION['otp']) {
        echo "OTP verificado correctamente.";
        // Aquí puedes redirigir al usuario a su cuenta o página de inicio
        header("Location: dashboard.php");
    } else {
        echo "OTP incorrecto. Intenta nuevamente.";
    }
} else {
    echo "No se recibió ningún OTP.";
}
?>
