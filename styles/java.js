function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match('images/img.jpg')) {
        image.src = 'images/img2.jpg'; // Change to a different image
    } else if (image.src.match('images/img2.jpg')){
        image.src = 'images/img3.jpeg';
    }
    else {
        image.src = 'images/img.jpg'; // Change back to the original image
    }
}




