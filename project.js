import { url } from './setting.js';

// Enter website
axios.get(url+"?data=enter project&locate=project");

// Navbar
document.getElementById('nav_home').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_home&locate=project");
})
document.getElementById('nav_myself').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_myself&locate=project");
})
document.getElementById('nav_project').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_project&locate=project");
})
document.getElementById('nav_contact').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_contact&locate=project");
})

// Project
document.getElementById('click-project1').addEventListener('click', () => {
  axios.get(url+"?data=enter project1-dalyuck by Read More&locate=project");
})
document.getElementById('click-project2').addEventListener('click', () => {
  axios.get(url+"?data=enter project2-snakeGame by Read More&locate=project");
})
document.getElementById('click-project3').addEventListener('click', () => {
  axios.get(url+"?data=enter project3-ImSeller by Read More&locate=project");
})

// footer
document.getElementById('footer1').addEventListener('click', () => {
  axios.get(url+"?data=enter my blog by footer&locate=project");
})

document.getElementById('footer2').addEventListener('click', () => {
  axios.get(url+"?data=enter my github by footer&locate=project");
})
