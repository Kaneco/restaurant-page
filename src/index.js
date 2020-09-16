// another JS file
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all'
import { content, overlappedContent } from './pageLoadHome'


let contentArea = document.getElementById("content");
let header = document.getElementById("header");
let mobileMenu = document.getElementById("mobile-menu");

header.addEventListener('click', event => {
    if (event.target.id === 'menu-home') { // Home Menu Tab
        console.log('Click! Home');
      }
      if (event.target.id === 'menu-about') { //  About Menu Tab
        console.log('Click! about');
      }
      if (event.target.id === 'menu-menu') { //  Menu Menu Tab
        console.log('Click! Menu');
      }
      if (event.target.id === 'menu-contact') { //  Contact Menu Tab
        console.log('Click! Contact');
      }
});

mobileMenu.addEventListener('click', event => {
    if (header.classList.contains("toggle-active")) {
        header.classList.remove("toggle-active");
        document.getElementById("mobile-menu").innerHTML = "<i class='fas fa-bars'></i>";
      } else {
        header.classList.add("toggle-active");
        document.getElementById("mobile-menu").innerHTML = "<i class='fas fa-times'></i>";
      }
});


function addHomeContent() {
    var element = document.createElement('div');
    element.id = "carousel";
    element.className += "carousel";
    element.className += " slide";
    element.setAttribute('data-ride', 'carousel');
    element.setAttribute('data-interval', '3000');
    // use your function!
    element.innerHTML = content();
    return element;
  }

  function addHomeOverlappedContent() {
    var element = document.createElement('div');
    element.id = "overlapped-content";
    // use your function!
    element.innerHTML = overlappedContent();
    return element;
  }
  
  //contentArea.appendChild(addHomeContent());
  //document.body.appendChild(addHomeOverlappedContent());

