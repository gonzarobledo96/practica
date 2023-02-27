<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $nombre = htmlspecialchars($_POST['nombre']);
  $correo = htmlspecialchars($_POST['correo']);
  $mensaje = htmlspecialchars($_POST['mensaje']);

  // procesar los datos, por ejemplo, enviar un correo electrónico o guardar los datos en una base de datos

  echo 'Gracias por contactarnos. Pronto nos pondremos en contacto contigo.';
}
?>