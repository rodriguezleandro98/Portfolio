document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    setTimeout(() => {
        alert(`😊 ¡Gracias, ${name}! Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.`);
        document.getElementById('contactForm').reset();
    }, 1000);
});

