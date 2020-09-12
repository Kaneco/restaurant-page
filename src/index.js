// another JS file
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pageLoad } from './pageLoad'

pageLoad(); //this should work as expected!


function component() {
    var element = document.createElement('div');
  
    // use your function!
    element.innerHTML = pageLoad();
    return element;
  }
  
  document.body.appendChild(component());