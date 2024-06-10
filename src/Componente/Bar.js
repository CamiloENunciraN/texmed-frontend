import React from 'react';
import './Bar.css';
import logo from './../Img/iconLogo.png'

function Bar() {
  return (
    <div id="bar">
        <img id="logo" src={logo} alt="" />
        <h1 id="title" className="link" >TEXMED</h1>
        <a id="iniciarSesion" className="link" onClick={modal_login} >Iniciar sesión</a>
        <a id="acercaDe" className="link" onClick={modal_about} >Acerca de</a>
    </div>
  );
}


const modal_about = () => {
  const modal= document.getElementById("modalAbout");
  modal.showModal();
};

const modal_login = () => {
  const modal= document.getElementById("modalLogin");
  modal.showModal();
};

export default Bar;
  