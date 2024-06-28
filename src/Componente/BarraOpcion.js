import React from 'react';
import './BarraOpcion.css';
import busqueda from "./../Img/searchIcon.png";
import { useNavigate } from 'react-router-dom';

function BarraOpcion() {
const navigate = useNavigate();
const buscar = (event) => {
  if (event.key === 'Enter') {
    let busqueda=document.getElementById('buscar').value;
    sessionStorage.setItem('busqueda', busqueda);
    if(busqueda==="")return;
    navigate ("/clientsearch");
  }
}

  return (
    <div className="opcionBar">
        <input onClick={()=>(navigate("/newmedida"))} type="button" value="Nueva medida" className="botonOpc" id="nuevaMedida" title="Agregar una nueva medida"/>
        <input onClick={()=>(navigate("/clientlist"))} type="button" value="Listado de clientes" className="botonOpc" id="listadoClientes" title="Listado de los clientes"/>
        <div className="inputSearch">
            <input onKeyDown = {buscar} id="buscar" type="text" placeholder="Buscar cliente" title="Escriba el nombre del cliente que desea buscar" maxLength={50} required/>
            <img className="imgIcon" src={busqueda} title="Escriba el nombre del cliente que desea buscar" alt=''/>
        </div>
    </div>
  );
}

export default BarraOpcion;