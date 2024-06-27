import React from 'react';
import user from "../Img/userIcon.png"

function FilaList(cliente) {

var tipo = "contenList_linea";
var img = <img src={user} alt='' />
if(cliente.cliente.nombre==="Nombre"){
tipo = "contenList_titulo"
img = <img src="" alt='' />
}

    return (
        <div className={tipo}>
            <div className="contenList_icon">{img}</div>
            <div className="contenList_nombre">{cliente.cliente.nombre}</div>
            <div className="contenList_telefono">{cliente.cliente.celular}</div>
            <div className="contenList_direccion">{cliente.cliente.direccion}</div>
        </div>
    );
}

export default FilaList;