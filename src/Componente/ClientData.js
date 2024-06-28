import React from 'react';
import './ClientData.css';
import user from './../Img/userIcon.png';
import telefono from './../Img/iconCelular.png'
import direccion from './../Img/iconUbicacion.png'
import { useState} from "react";

function ClientData(data ,metodo) {

    if(data.metodo==="mostrar" && data.data.length!==0){
         const [nombre, setNombre] = useState(data.data.cliente.nombre);
         const [celular, setCelular] = useState(data.data.cliente.celular);
         const [direccion, setDireccion] = useState(data.data.cliente.direccion);
    return (
        <div className="dataCliente">
            <div className="inputForm">
                <input id="formNombre" value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="Nombre" title="Escriba el nombre del cliente" maxLength={100} required />
                <img className="imgIcon" src={user} title="Escriba el nombre del cliente" alt=''/>
            </div>
            <div className="inputForm">
                <input id="formTelefono" value={celular} onChange={e => setCelular(e.target.value)} type="number" placeholder="Telefono" title="Escriba el telefono" maxLength={20} required />
                <img className="imgIcon" src={telefono} title="Escriba el telefono" alt=''/>
            </div>
            <div className="inputForm">
                <input id="formDireccion" value={direccion} onChange={e => setDireccion(e.target.value)} type="text" placeholder="Direccion" title="Escriba la direccion" maxLength={50} required />
                <img className="imgIcon" src={direccion} title="Calle x No. 8-04" alt=''/>
            </div>
        </div>
    );
    }

    return (
        <div className="dataCliente">
            <div className="inputForm">
                <input id="formNombre" type="text" placeholder="Nombre" title="Escriba el nombre del cliente" maxLength={100} required />
                <img className="imgIcon" src={user} title="Escriba el nombre del cliente" alt=''/>
            </div>
            <div className="inputForm">
                <input id="formTelefono" type="number" placeholder="Telefono" title="Escriba el telefono" maxLength={20} required />
                <img className="imgIcon" src={telefono} title="Escriba el telefono" alt=''/>
            </div>
            <div className="inputForm">
                <input id="formDireccion" type="text" placeholder="Direccion" title="Escriba la direccion" maxLength={50} required />
                <img className="imgIcon" src={direccion} title="Calle x No. 8-04" alt=''/>
            </div>
        </div>
    );
    
}

export default ClientData;