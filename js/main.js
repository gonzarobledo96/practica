const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const data = new FormData();
  data.append("nombre", nombre);
  data.append("email", email);
  data.append("mensaje", mensaje);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "enviar.php");
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert("El mensaje se ha enviado correctamente.");
      formulario.reset();
    } else {
      alert("Ha ocurrido un error. Intente de nuevo más tarde.");
    }
  };
  xhr.send(data);
});