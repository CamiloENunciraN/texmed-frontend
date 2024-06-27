import React from 'react';
import './ButtonOne.css'

function ButtonOne({nombre, onClick}) {
  return (
    <button className="ButtonOne" onClick={onClick}>
      {nombre}
    </button>
  );
}

export default ButtonOne;
  