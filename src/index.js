import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function goodClicking(){
  alert("Good clicking, my friend")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={goodClicking} />
  </div>,
  document.getElementById('root')
);
