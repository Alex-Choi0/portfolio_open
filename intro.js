import { url } from './setting.js';

// Enter website
axios.get(url+"?data=enter intro&locate=intro");

// Navbar
document.getElementById('nav_home').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_home&locate=intro");
})
document.getElementById('nav_myself').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_myself&locate=intro");
})
document.getElementById('nav_project').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_project&locate=intro");
})
document.getElementById('nav_contact').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_contact&locate=intro");
})

// Icon
document.getElementById('social1').addEventListener('click', () => {
  axios.get(url+"?data=enter blog by icon&locate=intro");
})
document.getElementById('social2').addEventListener('click', () => {
  axios.get(url+"?data=enter github by icon&locate=intro");
})
document.getElementById('social3').addEventListener('click', () => {
  axios.get(url+"?data=enter certificate by icon&locate=intro");
})
document.getElementById('social4').addEventListener('click', () => {
  axios.get(url+"?data=enter pair review by icon&locate=intro");
})

// footer
document.getElementById('footer1').addEventListener('click', () => {
  axios.get(url+"?data=enter my blog by footer&locate=intro");
})

document.getElementById('footer2').addEventListener('click', () => {
  axios.get("http://localhost:3000/portfolio1?data=enter my github by footer&locate=intro");
})
