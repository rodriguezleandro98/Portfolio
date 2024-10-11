document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    setTimeout(() => {
        alert(`😊 ¡Gracias, ${name}! Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.`);
        document.getElementById('contactForm').reset();
    }, 1000);
});

function sendWhatsApp1(event) {
    event.preventDefault(); // Evitar el envío normal del formulario

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '1164707899'; // Cambia esto por tu número de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola%20me%20llamo%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
    document.getElementById('contactForm').reset(); // Reinicia el formulario
}

function sendEmail(event) {
    event.preventDefault();
    
    // Obtener los datos del formulario
    const name = document.getElementById('nameEmail').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('messageEmail').value;
    
    // Aquí deberías hacer la llamada a tu API o servicio para enviar el correo
    // Por ejemplo, usando fetch o axios para enviar los datos
    
    // Ejemplo de respuesta
    document.getElementById('responseMessageEmail').innerText = 'Correo enviado exitosamente!';
}
