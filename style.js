const bikeColor = document.getElementById('bike-img');
const red = document.querySelector('.button-exterior-black');
const orange = document.querySelector('.button-exterior-white');
const pink = document.querySelector('.button-exterior-orange');


red.addEventListener('click', () => {
        bikeColor.alt = "Photo of the Smoove bike exterior in Black";
        bikeColor.src = "images/exterior_black.png";

})

orange.addEventListener('click', () => {
    bikeColor.alt = "Photo of the Smoove bike exterior in white";
    bikeColor.src = "images/exterior_white.png";
})

pink.addEventListener('click', () => {
    bikeColor.alt = "Photo of the Smoove bike exterior in orange";
    bikeColor.src = "images/exterior_orange.png";
})
   