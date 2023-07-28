const input = document.querySelector('input');
const qrImage = document.querySelector('img');
const genererBtn = document.querySelector('#generate');
const telechargerBtn = document.querySelector('#download');

genererBtn.addEventListener('click', () => {
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=${input.value}`;
    qrImage.src = qrCode;
});

telechargerBtn.addEventListener('click', async () => {
    const response = await fetch(qrImage.src);
    const blob = await response.blob();
    const telechargerLink = document.createElement("a");
    telechargerLink.href = URL.createObjectURL(blob);
    telechargerLink.download = "qrcodes.jpg";
    telechargerLink.click();
})