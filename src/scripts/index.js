import 'regenerator-runtime'; /* for async await transpile */
import '../scripts/global/config';
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/utils/drawer-init.js';
import '../views/pages/my-post';
import App from '../views/app';
import swRegister from './utils/sw-register';

const hamburgerButtonElement = document.querySelector('.hamburger');
const drawerElement = document.querySelector('.canvas');
const mainElement = document.querySelector('.main-content');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#canvas'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
