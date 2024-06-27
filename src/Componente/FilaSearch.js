import React from 'react';
import user from "../Img/userIcon.png"
import { useNavigate } from 'react-router-dom';

function FilaSearch(cliente) {

const navigate = useNavigate();
var tipo = "contenSearch_linea";
var img = <img src={user} alt='' />
if(cliente.cliente.anotaciones==="Nombre"){
    tipo = "contenSearch_titulo"
    img = <img src="" alt='' />
}

const vermedida = ()=>{
    localStorage.setItem('medida', cliente.cliente.id.id);
    navigate('/showmedida');
}

    return (
        <div className={tipo} title='Ver medida' id={cliente.cliente.id} onClick={vermedida}>
            <div className="contenSearch_icon">{img}</div>
            <div className="contenSearch_nombre">{cliente.cliente.anotaciones}</div>
            <div className="contenSearch_prenda">{cliente.cliente.tipo_prenda}</div>
            <div className="contenSearch_fecha">{cliente.cliente.fecha_creacion}</div>
        </div>
    );
}

export default FilaSearch;
