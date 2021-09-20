import { url } from './setting.js';
// Enter website
axios.get(url+"?data=enter index&locate=index")
.catch(err => console.log(err))
.finally(()=>console.log("get request"));

// Navbar
document.getElementById('nav_home').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_home&locate=index");
})
document.getElementById('nav_myself').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_myself&locate=index");
})
document.getElementById('nav_project').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_project&locate=index");
})
document.getElementById('nav_contact').addEventListener('click', () => {
  axios.get(url+"?data=enter nav_contact&locate=index");
})

// Read More
document.getElementById('click1').addEventListener('click', () => {
  axios.get(url+"?data=enter Myself by Read More&locate=index");
})

document.getElementById('click2').addEventListener('click', () => {
  axios.get(url+"?data=enter Project by Read More&locate=index");
})


// footer
document.getElementById('footer1').addEventListener('click', () => {
  axios.get(url+"?data=enter my blog by footer&locate=index");
})

document.getElementById('footer2').addEventListener('click', () => {
  axios.get(url+"?data=enter my github by footer&locate=index");
})
