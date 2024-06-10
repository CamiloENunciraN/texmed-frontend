import React from 'react';
import './Modal_login.css';
import './Modal.css';
import pass from "./../../Img/passwordIcon.png"
import user from "./../../Img/userIcon.png"

function Modal_login() {
    return (
        <dialog id="modalLogin">
            <input type="button" className="formCerrar" value="X" id="formLoginCerrar" onClick={cerrar} />
            <form id="formLogin">
                <a className="formTitle" >Iniciar sesión</a>
                <span id="msgLogin" className="formNot"></span>
                <div className="inputF">
                    <input id="formLoginMail" type="text" placeholder="Correo" title="Escriba su correo" maxLength={50} required />
                    <img className="imgIcon" src={user} title="Escriba su correo" alt=''/>
                </div>
                <div className="inputF">
                    <input id="formLoginPass" type="password" placeholder="Contraseña" title="Escriba su contraseña" maxLength={20} required />
                    <img className="imgIcon" src={pass} title="Escriba su contraseña" alt=''/>
                </div>
                <input id="formLoginBoton" type="button" value="Ingresar" className="buttonMain formBoton" onClick={iniciarSesion}/>
                <div id="modalLoginOpciones">
                    <a className="link" id="registrarseModal" onClick={modal_registrar} >¿No estás registrado?</a>
                    <a className="link" id="cambiarContraModal" onClick={modal_cambioPass}>¿Olvidaste la contraseña?</a>
                </div>
            </form>
        </dialog>
    );
}

const iniciarSesion = () => {
alert('test');
};

const cerrar = () => {
    const modal = document.getElementById("modalLogin");
    const span= document.getElementById("msgLogin");
    const usuario= document.getElementById("formLoginMail");
    const contra= document.getElementById("formLoginPass");
    span.innerHTML="";
    span.style.backgroundColor="transparent";
    usuario.value="";
    contra.value="";
    modal.close();
};

const modal_registrar = () => {
    const modallogin = document.getElementById("modalLogin");
    modallogin.close();
    const modal = document.getElementById("modalReg");
    modal.showModal();
};

const modal_cambioPass = () => {
    const modallogin = document.getElementById("modalLogin");
    modallogin.close();
    const modal = document.getElementById("modalRePass");
    modal.showModal();
};

export default Modal_login;