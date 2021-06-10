let qrcode=new QRCode(document.getElementById('qrcode'),{
    text:"https://www.youtube.com/",
    width: 250,
    height: 250,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
