import React from 'react';
import './ModalCambioPass.css';
import './Modal.css';
import mail from "./../../Img/mailIcon.png"

function ModalCambioPass() {
    return (
        <dialog id="modalRePass">
            <input type="button" className="formCerrar" value="X" id="formRePassCerrar" onClick={cerrar}/>
            <form id="formRePass">
                <a className="formTitle">Recuperar Contraseña</a>
                <span id="msgRePass" className="formNot"></span>
                <div className="inputF">
                    <input id="formRePassMail" type="text" placeholder="Correo" title="Escriba su correo" maxLength={50} required/>
                    <img className="imgIcon" src={mail} title="Escriba su correo" alt=''/>
                </div>
                <p>¿Desea que enviemos un mensaje a su correo con los pasos para recuperar su contraseña?</p>
                <input id="formRePassBoton" type="button" value="Enviar" className="buttonMain formBoton" onClick={cambioDePass}/>
            </form>
        </dialog>
    );
}

const cerrar = () => {
    const modal = document.getElementById("modalRePass");
    const span= document.getElementById("msgRePass");
    const usuario= document.getElementById("formRePassMail");
    span.innerHTML="";
    span.style.backgroundColor="transparent";
    usuario.value="";
    modal.close();
};

const cambioDePass = ()=>{
    alert("Recuperar clave no disponible... Proximamente en la Version 1.2")
}
export default ModalCambioPass;