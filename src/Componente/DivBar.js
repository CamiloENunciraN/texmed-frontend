import React from 'react';
import './DivBar.css';

function DivBar({nombre}) {
  return (
    <div className="divBar">{nombre}</div>      
  );
}

export default DivBar;