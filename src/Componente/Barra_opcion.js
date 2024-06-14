import React from 'react';
import './Barra_opcion.css';
import busqueda from "./../Img/searchIcon.png";

function Barra_opcion() {
  return (
    <div className="opcionBar">
        <input type="button" value="Nueva medida" className="botonOpc" id="nuevaMedida" title="Agregar una nueva medida"/>
        <input type="button" value="Listado de clientes" className="botonOpc" id="listadoClientes" title="Listado de los clientes"/>
        <div className="inputSearch">
            <input id="buscar" type="text" placeholder="Buscar cliente" title="Escriba el nombre del cliente que desea buscar" maxLength={50} required/>
            <img className="imgIcon" src={busqueda} title="Escriba el nombre del cliente que desea buscar" alt=''/>
        </div>
    </div>
  );
}

export default Barra_opcion;