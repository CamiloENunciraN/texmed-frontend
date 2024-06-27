import React from 'react';
import './ModalRegistrar.css';
import './Modal.css';
import user from  "./../../Img/userIcon.png";
import pass from "./../../Img/passwordIcon.png";
import {registrarUsuario} from "./../../Usuario/Usuario"

function ModalRegistrar() {

const registrar = () => {
    const correo=document.getElementById('formRegMail').value;
    const clave=document.getElementById('formRegPass').value;
    const claveConf=document.getElementById('formRegPassCon').value;
    const formNot = document.getElementById('msgReg');
    if(correo===""||clave===""||claveConf===""){
      formNot.innerHTML="Faltan datos";
      formNot.style.backgroundColor = '#F66151FF';
      formNot.style.color = 'black';
      return ;
    }
    if (clave!==claveConf){
        formNot.innerHTML="Las contraseñas no coinciden";
        formNot.style.backgroundColor = '#F66151FF';
        formNot.style.color = 'black';
        return ;
    }
    const data = {"correo": correo,
                  "clave": clave}
    
    registrarUsuario(data, formNot);
};

    return (   
    <dialog id="modalReg">
        <input type="button" className="formCerrar" value="X" id="formRegCerrar" onClick={cerrar}/>
        <form id="formReg">
            <a className="formTitle">Registrarse</a>
            <span id="msgReg" className="formNot"></span>
            <div className="inputF">
                <input id="formRegMail" type="text" placeholder="Usuario" title="Escriba su correo" maxLength={50} required />
                <img className="imgIcon" src={user} title="Escriba su correo" alt=''/>
            </div>
            <div className="inputF">
                <input id="formRegPass" type="password" placeholder="Contraseña" title="Escriba su contraseña" maxLength={20} required />
                <img className="imgIcon"  src={pass} title="Escriba su contraseña" alt=''/>
            </div>
            <div className="inputF">
                <input id="formRegPassCon" type="password" placeholder="Contraseña" title="Escriba su contraseña nuevamente" maxLength={20} required />
                <img className="imgIcon"  src={pass} title="Escriba su contraseña" alt=''/>
            </div>
            <input onClick={registrar} id="formRegBoton" type="button" value="Registrar" className="buttonMain formBoton" />
        </form>
    </dialog>
    );
}

const cerrar = () => {
    const modal = document.getElementById("modalReg");
    const span= document.getElementById("msgReg");
    const usuario= document.getElementById("formRegMail");
    const contra= document.getElementById("formRegPass");
    const contrac= document.getElementById("formRegPassCon");
    span.innerHTML="";
    span.style.backgroundColor="transparent";
    usuario.value="";
    contra.value="";
    contrac.value="";
    modal.close();
};

export default ModalRegistrar;