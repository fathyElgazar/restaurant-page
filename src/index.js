import './style.css';
import buildHome from './home';
import buildMenu from './menu';
import buildAbout from './about';

const container = document.getElementById('content');
const btnHome = document.querySelector('.btn-home');
const btnMenu = document.querySelector('.btn-menu');
const btnAbout = document.querySelector('.btn-about');

buildHome(container);
btnHome.classList.add('btn-focus');

btnHome.addEventListener('click', function (e) {
  btnHome.classList.add('btn-focus');

  btnAbout.classList.remove('btn-focus');
  btnMenu.classList.remove('btn-focus');
  buildHome(container);
});
btnMenu.addEventListener('click', function (e) {
  btnHome.classList.remove('btn-focus');
  btnAbout.classList.remove('btn-focus');
  btnMenu.classList.add('btn-focus');
  buildMenu(container);
});
btnAbout.addEventListener('click', function (e) {
  btnHome.classList.remove('btn-focus');
  btnAbout.classList.add('btn-focus');
  btnMenu.classList.remove('btn-focus');
  buildAbout(container);
});
