
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
        bikeExtColor.src = "images/exterior_black.png";
     }
     else {
        bikeExtColor.src = "images/exterior_black_mobile.png";
     }
});


whiteExt.addEventListener('click', () => {

    bikeExtColor.alt = "Photo of the Smoove bike exterior in white";

    if (window.innerWidth > 768) {
        bikeExtColor.src = "images/exterior_white.png";
    }
    else {
        bikeExtColor.src = "images/exterior_white_mobile.png";
    }

});

orangeExt.addEventListener('click', () => {

    bikeExtColor.alt = "Photo of the Smoove bike exterior in orange";

    if (window.innerWidth > 768) {
        bikeExtColor.src = "images/exterior_orange.png";
    }
    else {
        bikeExtColor.src = "images/exterior_orange_mobile.png";
    } 
});



blackInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in black";

    if (window.innerWidth > 768) {
        bikeIntColor.src = "images/interior_black.png";
    }
    else {
        bikeIntColor.src = "images/interior_black_mobile.png";

    }
});


whiteInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in white";

    if (window.innerWidth > 768) {
        bikeIntColor.src = "images/interior_white.png";

    }
    else {
        bikeIntColor.src = "images/interior_white_mobile.png";

    }
});

orangeInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in orange";

    if (window.innerWidth > 768) {
        bikeIntColor.src = "images/interior_orange.png";
    }
    else {
        bikeIntColor.src = "images/interior_orange_mobile.png";
    }
});


