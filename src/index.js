import {Navbar} from 'bootstrap'
import 'animate.css';
import animationOnScroll from './js/animationOnScroll';
import navbarBackground from './js/navbarBackground';
import rotateNavIcon from './js/rotateNavIcon';
import {icon, navLinks} from '../src/js/variables'

window.addEventListener('scroll', animationOnScroll)
window.addEventListener('scroll', navbarBackground)
navLinks.forEach(rotateNavIcon)
icon.addEventListener('click', () => icon.classList.toggle('open'))