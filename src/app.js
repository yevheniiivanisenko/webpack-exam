import { cube } from './math';
import { handleButtonClick } from './handlers';

import './scss/index.scss';

console.log(cube(5));

const BUTTON_NAME = 'Test Button';

function createButton(title) {
  const btn = document.createElement('button');
  btn.addEventListener('click', handleButtonClick);
  btn.innerText = title;

  return btn;
}

let button = createButton(BUTTON_NAME);
document.body.appendChild(button);

if (module.hot) {
  module.hot.accept('./handlers', function() {
    console.log('Accepting the updated math module!');
    document.body.removeChild(button);
    button = createButton(BUTTON_NAME);
    document.body.appendChild(button);
  });
}