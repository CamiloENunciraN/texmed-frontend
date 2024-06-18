import React from 'react';
import './ClientData.css';
import user from './../Img/userIcon.png';
import telefono from './../Img/iconCelular.png'
import direccion from './../Img/iconUbicacion.png'

function ClientData() {
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