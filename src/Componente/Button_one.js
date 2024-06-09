import React from 'react';
import './Button_one.css'

function Button_one({nombre, onClick}) {
  return (
    <button className="Button_one" onClick={onClick}>
      {nombre}
    </button>
  );
}

export default Button_one;
  