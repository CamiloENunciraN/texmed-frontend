import React from 'react';
import user from "../Img/userIcon.png"

function FilaSearch(cliente) {

var tipo = "contenSearch_linea";
var img = <img src={user} alt='' />
if(cliente.cliente.nombre==="Nombre"){
tipo = "contenSearch_titulo"
img = <img src="" alt='' />
}

    return (
        <div className={tipo} title='Ver medida'>
            <div className="contenSearch_icon">{img}</div>
            <div className="contenSearch_nombre">{cliente.cliente.nombre}</div>
            <div className="contenSearch_prenda">{cliente.cliente.prenda}</div>
            <div className="contenSearch_fecha">{cliente.cliente.fecha}</div>
        </div>
    );
}

export default FilaSearch;
