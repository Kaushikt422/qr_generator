document.getElementById('generate-btn').addEventListener('click', function () {
    const input = document.getElementById('qr-input').value;
    const qrCodeContainer = document.getElementById('qr-code');
  
    // Clear previous QR code
    qrCodeContainer.innerHTML = '';
  
    if (input) {
      // Generate new QR code
      new QRCode(qrCodeContainer, {
        text: input,
        width: 200,
        height: 200,
      });
    } else {
      alert('Please enter text or a URL to generate a QR code.');
    }
  });