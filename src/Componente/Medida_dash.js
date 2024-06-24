import React from 'react';
import './Medida_dash.css';
import Medida_icono from './Medida_icono';



function Medida_dash(data) {

  return (
    <section id="medAdd" className="medidaList">
      {data.data.map((medida, index) =>(
        <Medida_icono key={index} medida={medida}></Medida_icono>
      ))}
    </section>
  );
}

export default Medida_dash;