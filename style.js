  const menuButton = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

menuButton.addEventListener('change', function() {
  if (this.checked) {
    menu.style.height = '100%';
  } else {
    menu.style.height = '0';
  }
});