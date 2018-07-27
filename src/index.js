import _ from 'lodash';
import './style.css';
import pic from './1.png';
import prinntMe from './print';
import { cube } from './math';
import san from 'san';
import {router} from 'san-router';
import San from './app.san';


if(process.env.NODE_ENV !== 'production'){
  console.log('looks like we are in development mode!');
}else {
  console.log(process.env.NODE_ENV);
}


function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'ww !'], ' ');

  element.innerHTML = ['Hello WW!', '5 cubed is equal to ' + cube(5)].join('\t\n');

  element.className = 'hello';

  element.setAttribute('id', 'app');

  btn.innerHTML = 'click me and check the console';
  btn.onclick = prinntMe;

  var myPic = new Image();
  myPic.src = pic;

  element.appendChild(myPic);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

router.add({rule: '/', Component: San, target: '#app'});

router.start()

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}