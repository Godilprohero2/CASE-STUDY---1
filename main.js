Webcam.set({
    width:310,
    height:300,
    image_format : 'png',
    png_quailty:90,

    constraints: {
        facingMode: "enviornment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('camera');