
const bikeExtColor = document.getElementById('bike-exterior-img');
const blackExt = document.querySelector('.button-exterior-black');
const whiteExt = document.querySelector('.button-exterior-white');
const orangeExt = document.querySelector('.button-exterior-orange');

const bikeIntColor = document.getElementById('bike-interior-img');
const blackInt = document.querySelector('.button-interior-black');
const whiteInt = document.querySelector('.button-interior-white');
const orangeInt = document.querySelector('.button-interior-orange');


blackExt.addEventListener('click', () => {

    bikeExtColor.alt = "Photo of the Smoove bike exterior in black";

    if (window.innerWidth > 768) {
        bikeExtColor.src = "images/color-black.jpg";
     }
     else {
        bikeExtColor.src = "images/exterior_black_mobile.jpg";
     }
});


whiteExt.addEventListener('click', () => {

    bikeExtColor.alt = "Photo of the Smoove bike exterior in white";

    if (window.innerWidth > 768) {
        bikeExtColor.src = "images/color-white.jpg";
    }
    else {
        bikeExtColor.src = "images/exterior_white_mobile.jpg";
    }

});

orangeExt.addEventListener('click', () => {

    bikeExtColor.alt = "Photo of the Smoove bike exterior in orange";

    if (window.innerWidth > 768) {
        bikeExtColor.src = "images/color-orange.jpg";
    }
    else {
        bikeExtColor.src = "images/exterior_orange_mobile.jpg";
    } 
});



blackInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in black";

    if (window.innerWidth > 768) {
        bikeIntColor.src = "images/interior-black.jpg";
    }
    else {
        bikeIntColor.src = "images/interior-black-mobile.jpg";

    }
});


whiteInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in white";

    if (window.innerWidth > 768) {
        bikeIntColor.src = "images/interior-white.jpg";

    }
    else {
        bikeIntColor.src = "images/interior-white-mobile.jpg";

    }
});

orangeInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in orange";

    if (window.innerWidth > 768) {
        bikeIntColor.src = "images/interior-orange.jpg";
    }
    else {
        bikeIntColor.src = "images/interior-orange-mobile.jpg";
    }
});


