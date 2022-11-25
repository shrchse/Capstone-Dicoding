const hamburgerButtonElement = document.querySelector('.hamburger');
const drawerElement = document.querySelector('.canvas');
const mainElement = document.querySelector('.main-content');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});
 
mainElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
})