document.getElementById("contacto-formulario").addEventListener("submit", function(event) {

  event.preventDefault(); // Evita que el formulario recargue la página

  // Obtener los valores de los campos
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  // Validar que todos los campos estén llenos
  if (!nombre || !correo || !asunto || !mensaje) {
    alert("Por favor, completa todos los campos antes de enviar.");
    return;
  }

  // Crear el objeto de datos a enviar
  const templateParams = {
    from_name: nombre,
    from_email: correo,
    subject: asunto,
    message: mensaje,
  };

  // Enviar el correo utilizando EmailJS
  emailjs
    .send("service_8i3ll15", "template_9jezz8h", templateParams)
    .then(function(response) {
      alert("¡Mensaje enviado con éxito!");
      // Limpiar los campos del formulario
      document.getElementById("contacto-formulario").reset();
    })
    .catch(function(error) {
      alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      console.error("Error:", error);
    });
});
