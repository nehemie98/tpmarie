
// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire

    // Récupérer les valeurs du formulaire
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Afficher une réponse à l'utilisateur
    let response = document.getElementById('formResponse');
    response.innerHTML = `<div style="padding: 10px; background-color: #28a745; color: white;">Merci ${name}, votre message vennant de ${email} a  bien été envoyé !</div>`;
alert(message+name+email);
    // Vider les champs du formulaire
    document.getElementById('contactForm').reset();
});
function generateQRCode() {
    const data = document.getElementById('data').value;
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: data,
      width: 128,
      height: 128
    });
  }