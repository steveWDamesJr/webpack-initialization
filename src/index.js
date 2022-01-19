import _ from 'lodash';
import './style.css';
import Github from './popup-github.png';
import House from './cap-background.jpg';
import Data from './data.xml';
import Notes from './data.csv';
// No warning
//import data from './data.json';
// Warning shown, this is not allowed by the spec.
//import { foo } from './data.json';

function printMe() {
  console.log('I get called from print.js!');
}

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myGitIcon = new Image();
  myGitIcon.src = Github;
  const capHouse = new Image();
  capHouse.src = House;


  element.appendChild(myGitIcon);
  element.appendChild(capHouse);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());