
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
    bikeExtColor.src = "images/color-black.jpg";
});


whiteExt.addEventListener('click', () => {

    bikeExtColor.alt = "Photo of the Smoove bike exterior in white";
    bikeExtColor.src = "images/color-white.jpg";
    });

orangeExt.addEventListener('click', () => {

    bikeExtColor.alt = "Photo of the Smoove bike exterior in orange";
    bikeExtColor.src = "images/color-orange.jpg";
  });



blackInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in black";
    bikeIntColor.src = "images/interior-black.jpg";
});


whiteInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in white";
    bikeIntColor.src = "images/interior-white.jpg";
});

orangeInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in orange";
    bikeIntColor.src = "images/interior-orange.jpg";
});


