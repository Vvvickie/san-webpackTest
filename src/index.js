import _ from 'lodash';
import './style.css';
import pic from './1.png';
import prinntMe from './print';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'ww'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'click me and check the console';
  btn.onclick = prinntMe;

  var myPic = new Image();
  myPic.src = pic;

  element.appendChild(myPic);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());