import React from 'react';
import './Medida_dash.css';
import Medida_icono from './Medida_icono';



function Medida_dash() {
  const test = [{id: 1, nombre: "Camilo", tipo_prenda:"Pantalon"},
  {id: 2, nombre: "pepito", tipo_prenda: "Pantalon"},
  {id: 3, nombre: "laura", tipo_prenda: "Vestido"},
  {id: 4, nombre: "Camilo", tipo_prenda: "Camisa"},
  {id: 5, nombre: "laura", tipo_prenda: "Falda"}];
  
  return (
    <section id="medAdd" className="medidaList">
      {test.map((medida, index) =>(
        <Medida_icono key={index} medida={medida}></Medida_icono>
      ))}
    </section>
  );
}

export default Medida_dash;