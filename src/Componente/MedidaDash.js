import React from 'react';
import './MedidaDash.css';
import MedidaIcono from './MedidaIcono';



function MedidaDash(data) {

  return (
    <section id="medAdd" className="medidaList">
      {data.data.map((medida, index) =>(
        <MedidaIcono key={index} medida={medida}></MedidaIcono>
      ))}
    </section>
  );
}

export default MedidaDash;