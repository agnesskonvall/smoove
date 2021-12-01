
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
    blackExt.style.border = "solid";
    blackExt.style.borderColor = "#65da8c";
    whiteExt.style.border = "none";
    orangeExt.style.border = "none";
});


whiteExt.addEventListener('click', () => {

    bikeExtColor.alt = "Photo of the Smoove bike exterior in white";
    bikeExtColor.src = "images/color-white.jpg";
    whiteExt.style.border = "solid";
    whiteExt.style.borderColor = "#65da8c";
    blackExt.style.border = "none";
    orangeExt.style.border = "none";
    });

orangeExt.addEventListener('click', () => {

    bikeExtColor.alt = "Photo of the Smoove bike exterior in orange";
    bikeExtColor.src = "images/color-orange.jpg";
    orangeExt.style.border = "solid";
    orangeExt.style.borderColor = "#65da8c";
    whiteExt.style.border = "none";
    blackExt.style.border = "none";
  });



blackInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in black";
    bikeIntColor.src = "images/interior-black.jpg";
    blackInt.style.border = "solid";
    blackInt.style.borderColor = "#65da8c";
    whiteInt.style.border = "none";
    orangeInt.style.border = "none";
});


whiteInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in white";
    bikeIntColor.src = "images/interior-white.jpg";
    whiteInt.style.border = "solid";
    whiteInt.style.borderColor = "#65da8c";
    blackInt.style.border = "none";
    orangeInt.style.border = "none";
});

orangeInt.addEventListener('click', () => {

    bikeIntColor.alt = "Photo of the Smoove bike interior in orange";
    bikeIntColor.src = "images/interior-orange.jpg";
    orangeInt.style.border = "solid";
    orangeInt.style.borderColor = "#65da8c";
    whiteInt.style.border = "none";
    blackInt.style.border = "none";
});


