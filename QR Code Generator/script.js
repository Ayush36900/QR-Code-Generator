let imgBox=document.getElementById("imgBox");
let QRimage=document.getElementById("QRimage");
let QRText=document.getElementById("QRText");

function genrateQR(){
    QRimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+QRText.value;
}